import { ApiPayload, LoginPayload, Tokens } from 'api/apiTypes';

export const LOGIN = 'LOGIN';
export const LOGIN_ASYNC = 'LOGIN_ASYNC';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_ASYNC = 'REFRESH_TOKEN_ASYNC';

export type loginType = typeof LOGIN | typeof LOGIN_ASYNC;
export type loginPayload = ApiPayload<Tokens> & LoginPayload;
export interface Login {
  type: loginType;
  payload: loginPayload;
}
export const loginAction = (payload: loginPayload): Login => ({
  type: LOGIN,
  payload,
});

export type refreshTokenType =
  | typeof REFRESH_TOKEN
  | typeof REFRESH_TOKEN_ASYNC;
// export type refreshTok
export interface RefreshToken {
  type: refreshTokenType;
  payload: {};
}

export type AuthActions = Login;
