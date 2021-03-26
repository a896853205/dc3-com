import React, { useCallback } from 'react';

import { Button, Modal, Form, Input, Select, DatePicker } from 'antd';
import { useBoolean } from 'ahooks';
import { useDispatch } from 'react-redux';

import { addDevice } from '../actions';

const { Option } = Select;

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
          <Form.Item label='所属模板' required>
            <Select></Select>
          </Form.Item>
          <Form.Item label='存储类型'>
            <Select>
              <Option value='单点数据'>单点数据</Option>
              <Option value='结构数据'>结构数据</Option>
            </Select>
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
