import { handleActions } from 'redux-actions';
import produce from 'immer';

import { actionTypes } from './actions';

const initialState: Tagname.ReduxState = {
  tagname: {
    tagnames: [],
    refresh: true,
    searchParam: {
      name: '',
      tagname: '',
      type: '',
      isWrite: 0,
      sumTag: 0
    },
  },
};

export default handleActions(
  {
    // 增加位号后将刷新值改为true.
    [actionTypes.ADD_TAGNAME]: state => {
      console.log('REDUX ADD_FORMWORK');

      return produce(state, draftState => {
        draftState.refresh = true;
      });
    },

    // 搜索模板时将参数修改并将刷新值改为true
    [actionTypes.SEARCH_TAGNAME]: (state, { payload: { searchParam } }) => {
      console.log('REDUX SEARCH_FORMWORK');

      return produce(state, draftState => {
        draftState.refresh = true;
        draftState.searchParam = searchParam;
      });
    },

    // 查询模板之后将刷新值改为false.
    [actionTypes.SHOW_TAGNAME]: state => {
      console.log('REDUX SHOW_FORMWORK');

      return produce(state, draftState => {
        draftState.refresh = false;
      });
    },
  },
  initialState.tagname
);
