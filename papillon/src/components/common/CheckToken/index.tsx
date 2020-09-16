import * as React from 'react';

import { useHistory } from 'react-router-dom';
import { getAccessToken, setToken } from 'utils/token';
import { useAuth } from 'hooks/index';

function CheckToken({ children }) {
  const { push } = useHistory();
  const {
    authStore: { tokens },
  } = useAuth();

  React.useEffect(() => {
    const token = getAccessToken();

    if (!token) {
      window.alert('로그인 후에 접근할 수 있습니다.');
      push('/login');
    }
  }, []);

  React.useEffect(() => {
    setToken(tokens);
  }, [tokens]);

  return children;
}

export default CheckToken;
