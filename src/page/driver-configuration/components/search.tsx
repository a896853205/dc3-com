import React, { useCallback } from "react";

import { Form, Button, Select } from "antd";
import { useDispatch } from "react-redux";

import { searchDriverConfig } from "../actions";

const { Option } = Select;

export default () => {
  const dispatch = useDispatch();

  const onFinish = useCallback(
    (value) => {
      dispatch(searchDriverConfig({ searchParam: value }));
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
      <Form.Item label="所属产品">
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
