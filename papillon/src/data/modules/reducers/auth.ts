import { LOGIN_ASYNC, AuthActions } from '../actions/auth';

import { returnApiResponseData } from '.';
import { API_STATUS } from 'api/index';

export interface InitialState {
  loginStatus: 0 | 200 | 400 | 401;
  tokens: {
    access_token: string;
    refresh_token: string;
  };
}

const initialState: InitialState = {
  loginStatus: 0,
  tokens: {
    access_token: null,
    refresh_token: null,
  },
};

const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case LOGIN_ASYNC: {
      return returnApiResponseData<InitialState>({
        state,
        statusName: API_STATUS.loginStatus,
        payload: action.payload,
        dataKeyName: 'tokens',
      });
    }
    default:
      return state;
  }
};

export default authReducer;
