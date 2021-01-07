import React, { useCallback } from "react";

import { Form, Button, Select } from "antd";
import { useDispatch } from "react-redux";

import { searchTagconfig } from "../actions";

const { Option } = Select;

export default () => {
  const dispatch = useDispatch();

  const onFinish = useCallback(
    (value) => {
      dispatch(searchTagconfig({ searchParam: value }));
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
      <Form.Item label="所属设备" name="dev">
        <Select>
          <Option value={0}>Virtual-Device-01</Option>
        </Select>
      </Form.Item>
      <Form.Item label="所属位号" name="tagname">
        <Select>
          <Option value={0}>所属位号</Option>
        </Select>
      </Form.Item>
      <Form.Item label="属性" name="attribute">
        <Select>
          <Option value={0}>属性</Option>
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
