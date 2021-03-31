import { createActions } from 'redux-actions';

export const actionTypes = {
  ADD_GROUP: 'ADD_GROUP',
  SHOW_GROUP: 'SHOW_GROUP',
  SEARCH_GROUP: 'SEARCH_GROUP',
  BATCH_IMPORT_DEVICE: 'BATCH_IMPORT_DEVICE',
};

export const {
  addGroup,
  showGroup,
  searchGroup,
  batchImportDevice,
} = createActions({
  [actionTypes.ADD_GROUP]: state => state,
  [actionTypes.SHOW_GROUP]: state => state,
  [actionTypes.SEARCH_GROUP]: state => state,
  [actionTypes.BATCH_IMPORT_DEVICE]: state => state,
});
