import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loginAction, loginPayload } from '../data/modules/actions/auth';
import { AppState } from '../data/modules/store';
import { InitialState } from '../data/modules/reducers/auth';

export const useAuth = () => {
  const authStore = useSelector<AppState, InitialState>(state => ({
    loginStatus: state.auth.loginStatus,
    tokens: state.auth.tokens,
  }));

  const dispatch = useDispatch();

  const login = useCallback(
    (payload: loginPayload) => dispatch(loginAction(payload)),
    [dispatch],
  );

  return { authStore, login };
};

export default useAuth;
