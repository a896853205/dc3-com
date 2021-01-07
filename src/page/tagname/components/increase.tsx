import React, { useCallback } from 'react';

import { Button, Modal, Form, Input, Select, DatePicker } from 'antd';
import { useBoolean } from 'ahooks';
import { useDispatch } from 'react-redux';

import { addTagname } from '../actions';

const { Option } = Select;

export default () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const dispatch = useDispatch();

  const onFinish = useCallback(() => {
    // TODO: HTTP请求后台增加

    dispatch(addTagname());
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
          <Form.Item label='所属模板' required>
            <Input placeholder='Virtual-Profile' />
          </Form.Item>
          <Form.Item label='位号' required>
            <Input placeholder='随机值' />
          </Form.Item>
          <Form.Item label='类型' required>
            <Select>
              <Option value='字符串'>字符串</Option>
              <Option value='数值'>数值</Option>
            </Select>
          </Form.Item>
          <Form.Item label='读/写' required>
            <Select>
              <Option value='只读'>只读</Option>
              <Option value='可写'>可写</Option>
            </Select>
          </Form.Item>
          <Form.Item label='累计标识' required>
            <Select>
              <Option value='不累计'>不累计</Option>
              <Option value='累计'>累计</Option>
            </Select>
          </Form.Item>
          <Form.Item label='基值'>
            <Input placeholder='0' />
          </Form.Item>
          <Form.Item label='倍数' required>
            <Input placeholder='1' />
          </Form.Item>
          <Form.Item label='格式' required>
            <Input placeholder='%.3f' />
          </Form.Item>
          <Form.Item label='最小值'>
            <Input placeholder='-999999' />
          </Form.Item>
          <Form.Item label='最大值'>
            <Input placeholder='999999' />
          </Form.Item>
          <Form.Item label='单位'>
            <Input placeholder='请输入 单位' />
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
