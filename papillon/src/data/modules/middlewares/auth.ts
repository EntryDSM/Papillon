import { takeLatest } from 'redux-saga/effects';

import { sagaEntity } from './index';
import { LOGIN, LOGIN_ASYNC, Login, loginType } from '../actions/auth';
import { loginApi } from 'api/index';
import { LoginPayload } from 'api/apiTypes';

function* login(action: Login) {
  yield sagaEntity<loginType, LoginPayload>({
    action,
    api: loginApi,
    type: LOGIN_ASYNC,
  });
}

export default function* authSaga() {
  yield takeLatest(LOGIN, login);
}
