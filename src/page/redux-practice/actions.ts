import { createActions } from 'redux-actions';
export const actionTypes = {
  INCREASE: 'INCREASE',
  DECREASEl: 'DECREASE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

export const { loginRequest, logout } = createActions({
  [actionTypes.LOGIN_SUCCESS]: token => ({ token }),
  [actionTypes.LOGOUT]: state => state,
});
