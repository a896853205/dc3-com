import { createAction } from 'redux-actions';
export const actionTypes = {
  INCREASE: 'INCREASE',
  DECREASEl: 'DECREASE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOADING: 'LOADING',
};

export const logout = createAction<void>(actionTypes.LOGOUT);
export const loginRequest = createAction<{ token: string }, string>(
  actionTypes.LOGIN_REQUEST,
  (token: string) => ({ token })
);
export const loading = createAction<void>(actionTypes.LOADING);

logout();
