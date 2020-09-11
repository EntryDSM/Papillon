import * as React from 'react';
import { useHistory } from 'react-router';

import * as S from '../style';
import { logo } from 'assets/index';
import useAuth from 'hooks/useAuth';
import checkApiStatus from 'api/checkApiStatus';
import { setToken } from 'utils/token';

function Content() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isFailed, setIsFailed] = React.useState<boolean>(false);

  const {
    login,
    authStore: { loginStatus, tokens },
  } = useAuth();
  const { push } = useHistory();

  React.useEffect(() => {
    if (checkApiStatus(loginStatus)._200) {
      setToken({
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
      });
      push('/');
    } else if (checkApiStatus(loginStatus)._403) {
      setIsFailed(true);
    }
  }, [loginStatus]);

  const handleChangeEmail = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    [],
  );
  const handleChangePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    [],
  );
  const handleLogin = React.useCallback(() => {
    login({ email, password });
  }, [email, password]);

  return (
    <S.ContentWrapper>
      <img src={logo} alt="logo" />
      <h1>Login</h1>
      {isFailed ? (
        <p className="failed">이메일 혹은 비밀번호가 잘못되었습니다.</p>
      ) : (
        <p>지급받은 아이디와 비밀번호를 입력해 주세요</p>
      )}
      <S.LoginInput
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleChangeEmail}
      />
      <S.LoginInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={handleChangePassword}
      />
      <S.LoginBtn onClick={handleLogin}>Sign in</S.LoginBtn>
    </S.ContentWrapper>
  );
}

export default Content;
