import axios from 'axios';

import * as T from './apiTypes';

export enum API_STATUS {
  loginStatus = 'loginStatus',
}

const instance = axios.create({
  baseURL: 'https://jindo.entrydsm.hs.kr/v5/admin',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers':
      'X-Requested-With, content-type, Authorization',
  },
});

const authorization = (accessToken: string) => ({
  Authorization: accessToken,
});

export const loginApi = async (payload: T.LoginPayload) => {
  const response = await instance.post<T.Tokens>('/auth', payload);

  return [response.data, response.status];
};

