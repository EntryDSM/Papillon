import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { Content, Description } from '../components/Login';
import * as S from './style';
import { getAccessToken } from 'utils/token';

function Login() {
  const history = useHistory();

  React.useEffect(() => {
    if (getAccessToken()) history.push('/');
  }, []);

  return (
    <S.LoginPageContainer>
      <Description />
      <Content />
    </S.LoginPageContainer>
  );
}

export default Login;
