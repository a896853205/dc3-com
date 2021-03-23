import { createActions } from 'redux-actions';

export const actionTypes = {
  ADD_USER: 'ADD_USER',
  SHOW_USER: 'SHOW_USER',
};

export const { addUser, showUser } = createActions({
  [actionTypes.ADD_USER]: state => state,
  [actionTypes.SHOW_USER]: state => state,
});
