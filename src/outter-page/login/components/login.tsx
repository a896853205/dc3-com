import React from 'react';
import { useHistory } from 'react-router-dom';

import { Input, Form, Button } from 'antd';
import { KeyOutlined } from '@ant-design/icons';

import '../style.css';

export default () => {
  const history = useHistory();
  const handleLogin = (value: any) => {
    history.push('/home/timeline');
  };
  return (
    <Form
      onFinish={value => {
        handleLogin(value);
      }}
    >
      <Form.Item
        name='password'
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input
          prefix={<KeyOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='密码'
          type='password'
          name='password'
        />
      </Form.Item>
      <Form.Item>
        <div className='login-button-box'>
          <Button
            type='primary'
            htmlType='submit'
            style={{
              width: '100%',
            }}
          >
            登录
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
