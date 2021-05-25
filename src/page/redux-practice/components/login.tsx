import { Button } from 'antd';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions';

interface Props {
  count: number;
}
const Login = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        onClick={() => {
          dispatch({ type: 'LOGIN_REQUEST' });
        }}
      >
        login-request
      </Button>
      <Button
        onClick={() => {
          dispatch(logout());
        }}
      >
        login-out
      </Button>
    </>
  );
};

export default Login;
