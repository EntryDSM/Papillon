export const INPUT_EMAIL = 'INPUT_EMAIL';
export const INPUT_PASSWORD = 'INPUT_PASSWORD';

export interface InputEmail {
  type: typeof INPUT_EMAIL;
  payload: {
    email: string;
  };
}

export interface InputPassword {
  type: typeof INPUT_PASSWORD;
  payload: {
    password: string;
  };
}

export const inputEmail = (payload: { email: string }): InputEmail => ({
  type: INPUT_EMAIL,
  payload: {
    email: payload.email,
  },
});

export const inputPassword = (payload: {
  password: string;
}): InputPassword => ({
  type: INPUT_PASSWORD,
  payload: {
    password: payload.password,
  },
});

export type AuthActions = InputEmail | InputPassword;
