import { handleActions } from 'redux-actions';
import produce from 'immer';

import { actionTypes } from './actions';

const initialState: Formwork.ReduxState = {
  formworks: [],
};

export default handleActions(
  {
    // 链接后端时,此处不再需要,因为逻辑是增加直接走后端路由,表格直接搜索后端路由,redux保存一个刷新值即可.
    [actionTypes.ADD_FORMWORK]: (
      state,
      { payload: { formwork } }: { payload: { formwork: Formwork.Item } }
    ) => {
      formwork.uuid = `${Math.random()}`;

      return produce(state, draftState => {
        draftState.formworks.unshift(formwork);
      });
    },
  },
  initialState
);
