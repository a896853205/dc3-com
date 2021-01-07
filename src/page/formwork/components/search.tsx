import React, { useCallback } from 'react';

import { Form, Input, Button, Select } from 'antd';
import { useDispatch } from 'react-redux';

import { searchFormwork } from '../actions';

const { Option } = Select;

export default () => {
  const dispatch = useDispatch();

  const onFinish = useCallback(
    value => {
      dispatch(searchFormwork({ searchParam: value }));
    },
    [dispatch]
  );

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      layout='horizontal'
      onFinish={onFinish}>
      <Form.Item label='模板' name='name'>
        <Input placeholder='模板' />
      </Form.Item>
      <Form.Item label='公/私有' name='isPrivate'>
        <Select>
          <Option value={0}>公有</Option>
          <Option value={1}>私有</Option>
        </Select>
      </Form.Item>
      <Form.Item label='所有驱动' name='drive'>
        <Select>
          <Option value='Mqtt'>Mqtt</Option>
          <Option value='Opc Ua'>Opc Ua</Option>
          <Option value='Opc Da'>Opc Da</Option>
          <Option value='Modbus Tcp'>Modbus Tcp</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
        <Button type='primary' htmlType='submit'>
          搜索
        </Button>
      </Form.Item>
    </Form>
  );
};
