import React, { useCallback } from 'react';

import { Button, Modal, Form, Select, DatePicker } from 'antd';
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
        新增等级设置
      </Button>
      <Modal
        title='等级设置'
        visible={isShow}
        onOk={onFinish}
        onCancel={setFalse}
        cancelText='取消'
        okText='确定'>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout='horizontal'>
          <Form.Item label='等级'>
            <Select>
              <Option value='one'>一级</Option>
              <Option value='two'>二级</Option>
              <Option value='Three'>三级</Option>
              <Option value='four'>四级</Option>
              <Option value='five'>五级</Option>
            </Select>
          </Form.Item>
          <Form.Item label='内容' required>
            <Select>
              <Option value='one-level'>湿度过低</Option>
              <Option value='two-level'>温度显示异常</Option>
              <Option value='three-level'>湿度显示异常</Option>
              <Option value='four-level'>温度过高</Option>
              <Option value='five-level'>通信状态：断线报警</Option>
            </Select>
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
