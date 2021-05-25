import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    ({ isLoading }: { isLoading: boolean }) => isLoading
  );

  return (
    <>
      <Button
        onClick={() => {
          dispatch({ type: 'LOGIN_REQUEST' });
        }}>
        login-request
      </Button>
      <Button onClick={() => dispatch(logout())}>login-out</Button>
      {loading ? 'loading...' : ''}
    </>
  );
};

export default Login;
