import React, { useCallback } from 'react';

import { Button, Modal, Form, Input, Select } from 'antd';
import { useBoolean } from 'ahooks';
import { useDispatch } from 'react-redux';

import { addDevice } from '../actions';


export default () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const dispatch = useDispatch();

  const onFinish = useCallback(() => {
    // TODO:http向后台请求数据
    dispatch(addDevice());
    setFalse();
  }, [dispatch, setFalse]);

  return (
    <>
      <Button onClick={setTrue} type='primary'>
        新增设备
      </Button>
      <Modal
        title='新增设备'
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
          <Form.Item label='设备' required>
            <Input placeholder='设备' />
          </Form.Item>
          <Form.Item label='所属产品' required>
            <Select></Select>
          </Form.Item>
          <Form.Item label='所在位置' required>
            <Input placeholder='所在位置' />
          </Form.Item>
          <Form.Item label='备注'>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
