import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// 全局配置hooks
import { UseRequestProvider } from 'ahooks';
import axios from 'axios';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { requestLog, responseLog } from './util/axios-interceptors';
import * as APIS from './constants/api-constants';
import { ErrorBoundary } from './components/Error-boundary/Error-boundary';
import './index.css';
import reducer from './redux/reducers';
import routes from './route';
import * as serviceWorker from './serviceWorker';

// request拦截器
axios.interceptors.request.use(
  config => {
    requestLog(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response拦截器
axios.interceptors.response.use(
  response => {
    responseLog(response);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const store = createStore(reducer);

ReactDOM.render(
  <ErrorBoundary errorUrl={APIS.ERROR_LOG} nodeEnv={process.env.NODE_ENV}>
    <UseRequestProvider
      value={{
        requestMethod: param => axios(param),
      }}>
      <Provider store={store}>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </Provider>
    </UseRequestProvider>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
