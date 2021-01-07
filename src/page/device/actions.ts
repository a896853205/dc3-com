import { createActions } from "redux-actions";

export const actionTypes = {
  ADD_DEVICE: "ADD_DEVICE",
  SHOW_DEVICE: "SHOW_DEVICE",
  SEARCH_DEVICE: "SEARCH_DEVICE",
  BATCH_IMPORT_DEVICE: "BATCH_IMPORT_DEVICE",
};

export const {
  addDevice,
  showDevice,
  searchDevice,
  batchImportDevice,
} = createActions({
  [actionTypes.ADD_DEVICE]: (state) => state,
  [actionTypes.SHOW_DEVICE]: (state) => state,
  [actionTypes.SEARCH_DEVICE]: (state) => state,
  [actionTypes.BATCH_IMPORT_DEVICE]: (state) => state,
});
