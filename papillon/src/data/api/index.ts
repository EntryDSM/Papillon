import axios from 'axios';

import * as T from './apiTypes';

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

