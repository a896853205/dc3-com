import { Action, handleActions } from 'redux-actions';
import produce from 'immer';

import { actionTypes } from './actions';

interface TokenPayload {
  token: string;
}
const defaultState: Demo.ReduxState = {
  count: 1,
  user: 'sage',
  password: '123',
  isLoading: false,
};

export const reducer = handleActions<Demo.ReduxState, TokenPayload>(
  {
    /*  [actionTypes.INCREASE]: state => {
      return { ...state, count: state.count + 1 };
    },
    [actionTypes.DECREASEl]: state => {
      const result = produce(state, draftState => {
        draftState.count = state.count - 1;
      });
      return result;
    }, */
    [actionTypes.LOGOUT]: state => {
      console.log('退出登录');
      return state;
    },
    [actionTypes.LOGIN_SUCCESS]: (state, { payload }: Action<TokenPayload>) => {
      console.log('login success token:', payload);
      return state;
    },
    [actionTypes.LOADING]: state => {
      return produce(state, draftState => {
        draftState.isLoading = !draftState.isLoading;
      });
    },
  },
  defaultState
);
