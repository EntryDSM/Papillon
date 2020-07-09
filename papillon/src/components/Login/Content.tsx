import * as React from 'react';

import * as S from './style';
import { logo } from 'assets/index';

const Content: React.FC = () => {


  return (
    <S.contentWrapper>
      <img src={logo} alt="logo" />
      <h1>Login</h1>
      <p>지급받은 아이디와 비밀번호를 입력해 주세요</p>
      <S.loginInput
        type="text"
        placeholder="Email"
      />
      <S.loginInput
        type="password"
        placeholder="Password"
      />
      <S.loginBtn>Sign in</S.loginBtn>
    </S.contentWrapper>
  );
};

export default Content;
