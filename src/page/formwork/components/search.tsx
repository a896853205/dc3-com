import React from 'react';

import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

export default () => {
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 10 }} layout='horizontal'>
      <Form.Item label='模板'>
        <Input placeholder='模板' />
      </Form.Item>
      <Form.Item label='公/私有'>
        <Select>
          <Option value='公有'>公有</Option>
          <Option value='私有'>私有</Option>
        </Select>
      </Form.Item>
      <Form.Item label='所有驱动'>
        <Select>
          <Option value='Mqtt'>Mqtt</Option>
          <Option value='Opc Ua'>Opc Ua</Option>
          <Option value='Opc Da'>Opc Da</Option>
          <Option value='Modbus Tcp'>Modbus Tcp</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
        <Button type='primary'>搜索</Button>
      </Form.Item>
    </Form>
  );
};
