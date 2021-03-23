/**
 * 只有管理员权限的用户才能添加用户，普通用户无法添加用户
 */
import React, { useCallback } from 'react';

import { Button, Modal, Form, Input, Select } from 'antd';
import { useBoolean } from 'ahooks';
import { useDispatch } from 'react-redux';

import { addUser } from '../actions';

const { Option } = Select;

export default () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const dispatch = useDispatch();

  const onFinish = useCallback(() => {
    // TODO: HTTP请求后台增加

    dispatch(addUser());
    setFalse();
  }, [dispatch, setFalse]);

  return (
    <>
      <Button onClick={setTrue} type="primary">
        新增用户
      </Button>
      <Modal
        title="新增用户"
        visible={isShow}
        onOk={onFinish}
        onCancel={setFalse}
        cancelText="取消"
        okText="确定"
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
        >
          <Form.Item label="用户名" required>
            <Input placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '请输入您的密码',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请再次输入密码确认！',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次输入的密码不一致！'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              {
                type: 'email',
                message: '邮箱形式不正确！',
              },
              {
                required: true,
                message: '请输入您的邮箱!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="电话"
            rules={[{ required: true, message: '请输入您的电话!' }]}
          >
            <Input style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="权限" required>
            <Select>
              <Option value="manager">管理员</Option>
              <Option value="common">普通用户</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
