import React, { useCallback } from 'react';

import { Button, Modal, Form, Input, Select, DatePicker } from 'antd';
import { useBoolean } from 'ahooks';
import { useDispatch } from 'react-redux';

import { addTagconfig } from '../actions';

const { Option } = Select;

export default () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const dispatch = useDispatch();

  const onFinish = useCallback(() => {
    // TODO: HTTP请求后台增加

    dispatch(addTagconfig());
    setFalse();
  }, [dispatch, setFalse]);

  return (
    <>
      <Button onClick={setTrue} type='primary'>
        新增
      </Button>
      <Modal
        title='新增'
        visible={isShow}
        onOk={onFinish}
        onCancel={setFalse}
        cancelText='取消'
        okText='确定'>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout='horizontal'>
          <Form.Item label='所属设备' required>
            <Input placeholder='Virtual-Device-01' />
          </Form.Item>
          <Form.Item label='所属位号' required>
            <Select>
              <Option value='随机值'>随机值</Option>
            </Select>
          </Form.Item>
          <Form.Item label='属性' required>
            <Select>
              <Option value='位号'>位号</Option>
            </Select>
          </Form.Item>
          <Form.Item label='内容' required>
            <Input placeholder='random' />
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
