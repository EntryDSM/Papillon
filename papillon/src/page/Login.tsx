import * as React from 'react';

import { Content, Description } from '../components/Login';
import * as S from './style';

function Login() {
  return (
    <S.LoginPageContainer>
      <Description />
      <Content />
    </S.LoginPageContainer>
  );
}

export default Login;
