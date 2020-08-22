import { combineReducers } from 'redux';

import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;

export const returnApiResponseData = <I>(props: {
  state: I;
  statusName: string;
  payload: {
    data?: null | any;
    status?: number;
  };
  dataKeyName?: string;
}): I => {
  if (props.payload.data === null) {
    return {
      ...props.state,
      [props.statusName]: props.payload.status,
    };
  }

  if (props.dataKeyName) {
    return {
      ...props.state,
      [props.dataKeyName]: props.payload.data,
      [props.statusName]: props.payload.status,
    };
  }
};
