import React, { useCallback } from 'react';

import { Button, Modal, Form, Input, Select, DatePicker } from 'antd';
import { useBoolean } from 'ahooks';
import { useDispatch } from 'react-redux';

import { addDriverConfig } from '../actions';

const { Option } = Select;

export default () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const dispatch = useDispatch();

  const onFinish = useCallback(() => {
    // TODO: HTTP请求后台增加

    dispatch(addDriverConfig());
    setFalse();
  }, [dispatch, setFalse]);

  return (
    <>
      <Button onClick={setTrue} type='primary'>
        新增驱动配置
      </Button>
      <Modal
        title='新增驱动配置'
        visible={isShow}
        onOk={onFinish}
        onCancel={setFalse}
        cancelText='取消'
        okText='确定'
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout='horizontal'
        >
          <Form.Item label='所属产品' required>
            <Select></Select>
          </Form.Item>
          <Form.Item label='属性' required>
            <Select>
              <Option value='端口'>端口</Option>
              <Option value='主机'>主机</Option>
            </Select>
          </Form.Item>
          <Form.Item label='内容' required>
            <Input placeholder='内容' />
          </Form.Item>
          <Form.Item label='备注'>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label='修改日期' required>
            <DatePicker />
          </Form.Item>
          <Form.Item label='创建日期' required>
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
