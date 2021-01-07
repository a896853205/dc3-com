import React, { useCallback } from "react";

import { Form, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";

import { searchTagname } from "../actions";

const { Option } = Select;

export default () => {
  const dispatch = useDispatch();

  const onFinish = useCallback(
    (value) => {
      dispatch(searchTagname({ searchParam: value }));
    },
    [dispatch]
  );

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      layout="horizontal"
      onFinish={onFinish}
    >
      <Form.Item label="所属模板" name="name">
        <Input placeholder="所属模板" />
      </Form.Item>
      <Form.Item label="位号" name="tagname">
        <Input placeholder="位号" />
      </Form.Item>
      <Form.Item label="类型" name="type">
        <Select>
          <Option value={0}>公有</Option>
          <Option value={1}>私有</Option>
        </Select>
      </Form.Item>
      <Form.Item label="读/写" name="isWrite">
        <Select>
          <Option value={0}>只读</Option>
          <Option value={1}>可写</Option>
        </Select>
      </Form.Item>
      <Form.Item label="累计标识" name="sumTag">
        <Select>
          <Option value="Mqtt">Mqtt</Option>
          <Option value="Opc Ua">Opc Ua</Option>
          <Option value="Opc Da">Opc Da</Option>
          <Option value="Modbus Tcp">Modbus Tcp</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          搜索
        </Button>
      </Form.Item>
    </Form>
  );
};
