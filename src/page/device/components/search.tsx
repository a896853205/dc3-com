import React, { useCallback } from "react";

import { Form, Button, Input, Select } from "antd";
import { useDispatch } from "react-redux";

import { searchDevice } from "../actions";

export default () => {
  const dispatch = useDispatch();

  const onFinish = useCallback(
    (value) => {
      dispatch(searchDevice({ searchParam: value }));
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
      <Form.Item label="设备">
        <Input placeholder="设备" />
      </Form.Item>
      <Form.Item label="所属模板">
        <Select></Select>
      </Form.Item>
      <Form.Item label="所属分组" className="attribute">
        <Select></Select>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
        <Button type="primary">搜索</Button>
      </Form.Item>
    </Form>
  );
};
