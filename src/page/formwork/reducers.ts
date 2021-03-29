import { handleActions } from 'redux-actions';
import produce from 'immer';

import { actionTypes } from './actions';

const initialState: Formwork.ReduxState = {
  formwork: {
    formworks: [],
    refresh: true,
    searchParam: {
      name: '',
      isPrivate: 0,
      drive: '',
    },
  },
};

export default handleActions(
  {
    // 增加产品后将刷新值改为true.
    [actionTypes.ADD_FORMWORK]: state => {
      console.log('REDUX ADD_FORMWORK');

      return produce(state, draftState => {
        draftState.refresh = true;
      });
    },

    // 搜索产品时将参数修改并将刷新值改为true
    [actionTypes.SEARCH_FORMWORK]: (state, { payload: { searchParam } }) => {
      console.log('REDUX SEARCH_FORMWORK');

      return produce(state, draftState => {
        draftState.refresh = true;
        draftState.searchParam = searchParam;
      });
    },

    // 查询产品之后将刷新值改为false.
    [actionTypes.SHOW_FORMWORK]: state => {
      console.log('REDUX SHOW_FORMWORK');

      return produce(state, draftState => {
        draftState.refresh = false;
      });
    },
  },
  initialState.formwork
);
