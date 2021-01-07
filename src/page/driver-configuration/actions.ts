import { createActions } from "redux-actions";

export const actionTypes = {
  ADD_DRIVER_CONFIG: "ADD_DRIVER_CONFIG",
  SHOW_DRIVER_CONFIG: "SHOW_DRIVER_CONFIG",
  SEARCH_DRIVER_CONFIG: "SEARCH_DRIVER_CONFIG",
};

export const {
  addDriverConfig,
  showDriverConfig,
  searchDriverConfig,
} = createActions({
  [actionTypes.ADD_DRIVER_CONFIG]: (state) => state,
  [actionTypes.SHOW_DRIVER_CONFIG]: (state) => state,
  [actionTypes.SEARCH_DRIVER_CONFIG]: (state) => state,
});
