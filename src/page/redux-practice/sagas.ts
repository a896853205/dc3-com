/**
 * 模拟登录
 */
import { take, call, put, fork } from 'redux-saga/effects';

import * as API from './api';

function* authorize() {
  try {
    const token: string = yield call(API.login);
    console.log('saga token:', token);
    yield put({ type: 'LOGIN_SUCCESS', payload: token });
  } catch (e) {
    yield put({ type: 'LOGIN_ERROR', e });
  }
}

export function* loginFlow() {
  while (true) {
    yield take('LOGIN_REQUEST');
    console.log('saga: login resuest is sended');
    yield fork(authorize);
    yield take(['LOGOUT', 'LOGIN_ERROR']);
    yield call(API.clearToken);
  }
}
