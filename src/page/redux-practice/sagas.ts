/**
 * 模拟登录
 */
import { Action } from 'redux-actions';
import { Task } from 'redux-saga';
import {
  take,
  call,
  put,
  fork,
  cancel,
  StrictEffect,
} from 'redux-saga/effects';
import { loading } from './actions';

import * as API from './api';

function* authorize() {
  try {
    yield put(loading());

    const token: string = yield call(API.login);
    console.log('saga token:', token);
    yield put({ type: 'LOGIN_SUCCESS', payload: token });
  } catch (e) {
    yield put({ type: 'LOGIN_ERROR', e });
  } finally {
    yield put(loading());
  }
}

export function* loginFlow(): Generator<
  StrictEffect,
  void,
  Task | Action<string> | undefined
> {
  while (true) {
    yield take('LOGIN_REQUEST');
    console.log('saga: login resuest is sended');

    const task = (yield fork(authorize)) as Task;
    const action = (yield take(['LOGOUT', 'LOGIN_ERROR'])) as Action<string>;

    if (action?.type === 'LOGOUT' && task) {
      yield cancel(task);
    }

    yield call(API.clearToken);
  }
}
