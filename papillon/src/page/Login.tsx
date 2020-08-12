import * as React from 'react';

import { Content, Description } from '../components/Login';
import * as S from './style';

const Login: React.FC = () => (
  <S.LoginPageContainer>
    <Description />
    <Content />
  </S.LoginPageContainer>
);

export default Login;
