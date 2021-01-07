import React from 'react';

import { Form, Button, Select } from 'antd';

const { Option } = Select;

export default () => {
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 10 }} layout="horizontal">
      <Form.Item label="所属模板">
        <Select></Select>
      </Form.Item>
      <Form.Item label="属性">
        <Select>
          <Option value="端口">端口</Option>
          <Option value="主机">主机</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
        <Button type="primary">搜索</Button>
      </Form.Item>
    </Form>
  );
};
