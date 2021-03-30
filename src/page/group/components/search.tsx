import React, { useCallback } from 'react';

import { Form, Button, Input } from 'antd';
import { useDispatch } from 'react-redux';

import { searchDevice } from '../actions';

export default () => {
  const dispatch = useDispatch();

  const onFinish = useCallback(
    value => {
      dispatch(searchDevice({ searchParam: value }));
    },
    [dispatch]
  );
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      layout='horizontal'
      onFinish={onFinish}
    >
      <Form.Item label='分组'>
        <Input placeholder='请输入分组名称' />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
        <Button type='primary'>搜索</Button>
      </Form.Item>
    </Form>
  );
};
