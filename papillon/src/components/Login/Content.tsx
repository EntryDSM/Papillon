import * as React from 'react';

import * as S from './style';
import { logo } from 'assets/index';
import useAuth from 'hooks/useAuth';

const Content: React.FC = () => {
  const { inputStatus, changeEmail, changePassword } = useAuth();
function Content() {

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeEmail(e.target.value);
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    changePassword(e.target.value);

  return (
    <S.ContentWrapper>
      <img src={logo} alt="logo" />
      <h1>Login</h1>
      <p>지급받은 아이디와 비밀번호를 입력해 주세요</p>
      <S.LoginInput
        type="text"
        placeholder="Email"
        value={inputStatus.email}
        onChange={handleChangeEmail}
      />
      <S.LoginInput
        type="password"
        placeholder="Password"
        value={inputStatus.password}
        onChange={handleChangePassword}
      />
      <S.LoginBtn>Sign in</S.LoginBtn>
    </S.ContentWrapper>
  );
};
}

export default Content;
