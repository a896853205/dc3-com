import React, { useCallback } from 'react';

import { Button, Modal, Form, Input, Select } from 'antd';
import { useBoolean } from 'ahooks';

const { Option } = Select;

export default () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);

  const onFinish = useCallback(() => {
    setFalse();
  }, [setFalse]);

  return (
    <>
      <Button onClick={setTrue} type='primary'>
        新增告警设置
      </Button>
      <Modal
        title='告警设置'
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
          <Form.Item label='方式' required>
            <Select>
              <Option value='mobilephone'>手机</Option>
              <Option value='email'>邮箱</Option>
            </Select>
          </Form.Item>
          <Form.Item label='内容' required>
            <Input placeholder='手机号/邮箱' />
          </Form.Item>
          <Form.Item label='频率'>
            <Select>
              <Option value='ten-minutes'>10分钟</Option>
              <Option value='twenty-minutes'>20分钟</Option>
              <Option value='thirty-minutes'>30分钟</Option>
              <Option value='one-hour'>1小时</Option>
              <Option value='six-hour'>6小时</Option>
              <Option value='twelve-hour'>12小时</Option>
            </Select>
          </Form.Item>
          <Form.Item label='等级'>
            <Select>
              <Option value='one'>1级</Option>
              <Option value='two'>2级</Option>
              <Option value='Three'>3级</Option>
              <Option value='four'>4级</Option>
              <Option value='five'>5级</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
