import { handleActions } from 'redux-actions';
import produce from 'immer';

import { actionTypes } from './actions';

const initialState: DriverConfig.ReduxState = {
  driverConfig: {
    driverConfigs: [],
    refresh: true,
    searchParam: {
      dev: '',
      attribute: ''
    },
  },
};

export default handleActions(
  {
    // 增加驱动设置后将刷新值改为true.
    [actionTypes.ADD_DRIVERCONFIG]: state => {
      console.log('REDUX ADD_DRIVERCONFIG');

      return produce(state, draftState => {
        draftState.refresh = true;
      });
    },

    // 搜索驱动设置时将参数修改并将刷新值改为true
    [actionTypes.SEARCH_DRIVERCONFIG]: (state, { payload: { searchParam } }) => {
      console.log('REDUX SEARCH_DRIVERCONFIG');

      return produce(state, draftState => {
        draftState.refresh = true;
        draftState.searchParam = searchParam;
      });
    },

    // 查询驱动设置之后将刷新值改为false.
    [actionTypes.SHOW_DRIVERCONFIG]: state => {
      console.log('REDUX SHOW_DRIVERCONFIG');

      return produce(state, draftState => {
        draftState.refresh = false;
      });
    },
  },
  initialState.driverConfig
);
