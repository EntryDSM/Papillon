import { ApiPayload, LoginPayload, Tokens } from 'api/apiTypes';

export const LOGIN = 'LOGIN';
export const LOGIN_ASYNC = 'LOGIN_ASYNC';

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


export type AuthActions = Login;
