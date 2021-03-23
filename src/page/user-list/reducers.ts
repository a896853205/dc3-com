import { handleActions } from 'redux-actions';
import produce from 'immer';

import { actionTypes } from './actions';

const initialState: User.ReduxState = {
  user: {
    userList: [],
    refresh: true,
  },
};

export default handleActions(
  {
    // 增加模板后将刷新值改为true.
    [actionTypes.ADD_USER]: state => {
      return produce(state, draftState => {
        draftState.refresh = true;
      });
    },
    // 查询模板之后将刷新值改为false.
    [actionTypes.SHOW_USER]: state => {
      return produce(state, draftState => {
        draftState.refresh = false;
      });
    },
  },
  initialState.user
);
