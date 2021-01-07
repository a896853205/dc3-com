import { createActions } from 'redux-actions';

export const actionTypes = {
  ADD_DRIVERCONFIG: 'ADD_DRIVERCONFIG',
  SHOW_DRIVERCONFIG: 'SHOW_DRIVERCONFIG',
  SEARCH_DRIVERCONFIG: 'SEARCH_DRIVERCONFIG',
};

export const { addDriverConfig, showDriverConfig, searchDriverConfig } = createActions({
  [actionTypes.ADD_DRIVERCONFIG]: state => state,
  [actionTypes.SHOW_DRIVERCONFIG]: state => state,
  [actionTypes.SEARCH_DRIVERCONFIG]: state => state,
});
