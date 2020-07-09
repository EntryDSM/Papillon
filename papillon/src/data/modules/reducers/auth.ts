import { INPUT_EMAIL, INPUT_PASSWORD, AuthActions } from '../actions/auth';

interface InitialState {
  email: string;
  password: string;
}

const initialState: InitialState = {
  email: '',
  password: '',
};

const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case INPUT_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case INPUT_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default authReducer;
