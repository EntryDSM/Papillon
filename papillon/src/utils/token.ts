export const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

export const getRefreshToken = () => {
  return localStorage.getItem('refresh_token');
};

export const setToken = (tokens: {
  accessToken?: string | null;
  refreshToken?: string | null;
}) => {
  localStorage.setItem('access_token', tokens.accessToken || '');
  localStorage.setItem('refresh_token', tokens.refreshToken || '');
};

export const clearStorage = () => {
  localStorage.clear();
};
