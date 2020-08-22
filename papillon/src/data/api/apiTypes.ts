export interface ApiPayload<T = null> {
  data?: T;
  status?: number;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface Tokens {
  accrssToken?: string;
  refreshToken?: string;
}
