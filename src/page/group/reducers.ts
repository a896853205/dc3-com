import { handleActions } from 'redux-actions';
import produce from 'immer';

import { actionTypes } from './actions';

const initialState: Group.ReduxState = {
  group: {
    groups: [],
    refresh: true,
    searchParam: {
      name: '',
    },
  },
};

export default handleActions(
  {
    // 增加设备后将刷新值改为true.
    [actionTypes.ADD_GROUP]: state => {
      console.log('REDUX ADD_GROUP');

      return produce(state, (draftState: any) => {
        draftState.refresh = true;
      });
    },

    // 搜索设备时将参数修改并将刷新值改为true
    [actionTypes.SEARCH_GROUP]: (state, { payload: { searchParam } }) => {
      console.log('REDUX SEARCH_GROUP');

      return produce(state, (draftState: any) => {
        draftState.refresh = true;
        draftState.searchParam = searchParam;
      });
    },

    // 查询设备之后将刷新值改为false.
    [actionTypes.SHOW_GROUP]: state => {
      console.log('REDUX SHOW_GROUP');

      return produce(state, (draftState: any) => {
        draftState.refresh = false;
      });
    },
  },
  initialState.group
);
