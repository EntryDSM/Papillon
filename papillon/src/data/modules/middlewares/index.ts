import { put, call, all } from 'redux-saga/effects';

import authSaga from './auth';
import { AxiosError } from 'axios';
import { refreshTokenApi } from 'api/index';
import { REFRESH_TOKEN_ASYNC } from '../actions/auth';
import { clearStorage, getRefreshToken } from '../../../utils/token';

interface SagaEntityParams<ActionT, PayloadT> {
  action: {
    type: ActionT;
    payload?: PayloadT;
  };
  api: (payload?: any) => Promise<any[]>;
  type: string;
}

export function* sagaEntity<ActionT, PayloadT = object>({
  action,
  api,
  type,
}: SagaEntityParams<ActionT, PayloadT>) {
  try {
    const response = yield call(api, action.payload);

    yield put({
      type,
      payload: { data: response[0], status: response[1] },
    });
  } catch (_err) {
    const error: AxiosError = _err;

    if (error.response?.status === 401) {
      try {
        const refreshToken: string = getRefreshToken();
        const tokenResponse = yield call(refreshTokenApi, {
          refreshToken,
        });
        yield put({
          type: REFRESH_TOKEN_ASYNC,
          payload: { data: tokenResponse[0], status: tokenResponse[1] },
        });

        const response = yield call(api, {
          ...action.payload,
          accessToken: tokenResponse[0].access_token,
        });
        yield put({
          type,
          payload: {
            data: {
              ...response[0],
            },
            status: response[1],
          },
        });
      } catch (err) {
        if (err.response?.status === 401) {
          clearStorage();
          alert('유저 정보 토큰이 만료되어 새로고침됩니다.');
          window.location.reload();
        } else {
          yield put({
            payload: { data: null, status: err.response?.status },
            type,
          });
        }
      }
    } else if (error.response?.status) {
      yield put({
        payload: { data: null, status: error.response.status },
        type,
      });
    }
  }
}

export default function* rootSaga() {
  yield all([call(authSaga)]);
}
