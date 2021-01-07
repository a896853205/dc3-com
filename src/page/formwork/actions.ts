import { createActions } from 'redux-actions';

export const actionTypes = {
  ADD_FORMWORK: 'ADD_FORMWORK',
};

export const { addArticle } = createActions({
  [actionTypes.ADD_FORMWORK]: (formwork: Formwork.Item) => ({ formwork }),
});
