import { createActions } from 'redux-actions';

export const actionTypes = {
  ADD_FORMWORK: 'ADD_FORMWORK',
  SHOW_FORMWORK: 'SHOW_FORMWORK',
  SEARCH_FORMWORK: 'SEARCH_FORMWORK',
};

export const { addFormwork, showFormwork, searchFormwork } = createActions({
  [actionTypes.ADD_FORMWORK]: state => state,
  [actionTypes.SHOW_FORMWORK]: state => state,
  [actionTypes.SEARCH_FORMWORK]: state => state,
});
