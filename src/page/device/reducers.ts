import { handleActions } from 'redux-actions';
import produce from 'immer';

import { actionTypes } from './actions';

const initialState: Device.ReduxState = {
  device: {
    devices: [],
    refresh: true,
    searchParam: {
      device: '',
      dev: '',
      group: ''
    },
  },
};

export default handleActions(
  {
    // 增加设备后将刷新值改为true.
    [actionTypes.ADD_DEVICE]: state => {
      console.log('REDUX ADD_DEVICE');

      return produce(state, draftState => {
        draftState.refresh = true;
      });
    },

    // 搜索设备时将参数修改并将刷新值改为true
    [actionTypes.SEARCH_DEVICE]: (state, { payload: { searchParam } }) => {
      console.log('REDUX SEARCH_DEVICE');

      return produce(state, draftState => {
        draftState.refresh = true;
        draftState.searchParam = searchParam;
      });
    },

    // 查询设备之后将刷新值改为false.
    [actionTypes.SHOW_DEVICE]: state => {
      console.log('REDUX SHOW_DEVICE');

      return produce(state, draftState => {
        draftState.refresh = false;
      });
    },
  },
  initialState.device
);
