import { createActions } from 'redux-actions';

export const actionTypes = {
  ADD_TAGCONFIG: 'ADD_TAGCONFIG',
  SHOW_TAGCONFIG: 'SHOW_TAGCONFIG',
  SEARCH_TAGCONFIG: 'SEARCH_TAGCONFIG',
};

export const { addTagconfig, showTagconfig, searchTagconfig } = createActions({
  [actionTypes.ADD_TAGCONFIG]: state => state,
  [actionTypes.SHOW_TAGCONFIG]: state => state,
  [actionTypes.SEARCH_TAGCONFIG]: state => state,
});
