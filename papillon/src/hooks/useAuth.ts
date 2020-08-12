import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { inputEmail, inputPassword } from '../data/modules/actions/auth';
import { AppState } from '../data/modules/store';

interface SelectorType {
  email: string;
  password: string;
}

export const useAuth = () => {
  const inputStatus = useSelector<AppState, SelectorType>(state => ({
    email: state.auth.email,
    password: state.auth.password,
  }));

  const dispatch = useDispatch();

  const changeEmail = useCallback(
    (email: string) => dispatch(inputEmail({ email })),
    [dispatch],
  );
  const changePassword = useCallback(
    (password: string) => dispatch(inputPassword({ password })),
    [dispatch],
  );

  return { inputStatus, changeEmail, changePassword };
};

export default useAuth;
