import { handleActions } from 'redux-actions';
import produce from 'immer';

import { actionTypes } from './actions';

const initialState: TagConfig.ReduxState = {
  tagConfig: {
    tagConfigs: [],
    refresh: true,
    searchParam: {
      dev: '',
      tagname: '',
      attribute: ''
    },
  },
};

export default handleActions(
  {
    // 增加位号配置后将刷新值改为true.
    [actionTypes.ADD_TAGCONFIG]: state => {
      console.log('REDUX ADD_FORMWORK');

      return produce(state, draftState => {
        draftState.refresh = true;
      });
    },

    // 搜索位号配置时将参数修改并将刷新值改为true
    [actionTypes.SEARCH_TAGCONFIG]: (state, { payload: { searchParam } }) => {
      console.log('REDUX SEARCH_FORMWORK');

      return produce(state, draftState => {
        draftState.refresh = true;
        draftState.searchParam = searchParam;
      });
    },

    // 查询位号配置之后将刷新值改为false.
    [actionTypes.SHOW_TAGCONFIG]: state => {
      console.log('REDUX SHOW_FORMWORK');

      return produce(state, draftState => {
        draftState.refresh = false;
      });
    },
  },
  initialState.tagConfig
);
