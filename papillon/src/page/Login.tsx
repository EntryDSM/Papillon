import * as React from 'react';

import Content from '../components/Login/Content';
import Description from '../components/Login/Description';
import * as S from './style';

const Login: React.FC = () => (
  <S.LoginPageContainer>
    <Description />
    <Content />
  </S.LoginPageContainer>
);

export default Login;
