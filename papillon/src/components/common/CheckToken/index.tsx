import * as React from 'react';

import { useHistory } from 'react-router-dom';
import { getAccessToken } from 'utils/token';

function CheckToken({ children }) {
  const { push } = useHistory();
  React.useEffect(() => {
    const token = getAccessToken();

    if (!token) {
      window.alert('로그인 후에 접근할 수 있습니다.');
      push('/login');
    }
  }, []);

  return children;
}

export default CheckToken;
