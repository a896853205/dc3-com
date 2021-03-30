import React, { useCallback } from 'react';

import { Button, Modal, Form, Input } from 'antd';
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
        创建分组
      </Button>
      <Modal
        title='创建分组'
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
          <Form.Item label='分组名称' required>
            <Input placeholder='请输入分组名称' />
          </Form.Item>
          <Form.Item label='分组描述'>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
