/**
 * 只有管理员权限的用户才能添加用户，普通用户无法添加用户
 */
import React, { useCallback } from 'react';

import { Button, Modal, Form, Input, Checkbox, Row, Col } from 'antd';
import { useBoolean } from 'ahooks';
import { useDispatch } from 'react-redux';

import { addUser } from '../actions';

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
          <Form.Item name="tags" label="可查看模块">
            <Checkbox.Group>
              <Row>
                <Col span={8}>
                  <Checkbox value="index" style={{ lineHeight: '32px' }}>
                    首页展示
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="device-access"
                    style={{ lineHeight: '32px' }}
                  >
                    设备接入
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="device-manage"
                    style={{ lineHeight: '32px' }}
                  >
                    设备数据管理
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="status" style={{ lineHeight: '32px' }}>
                    状态监控
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="warnning" style={{ lineHeight: '32px' }}>
                    告警管理
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="user" style={{ lineHeight: '32px' }}>
                    用户管理
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
