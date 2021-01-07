import React from 'react';

import { Button, Modal, Form, Input, Select, DatePicker } from 'antd';
import { useBoolean } from 'ahooks';
import { useDispatch } from 'react-redux';

const { Option } = Select;

export default () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  // const dispatch = useDispatch();

  return (
    <>
      <Button onClick={setTrue} type='primary'>
        新增模板
      </Button>
      <Modal
        title='新增模板'
        visible={isShow}
        onOk={setFalse}
        onCancel={setFalse}
        cancelText='取消'
        okText='确定'>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout='horizontal'>
          <Form.Item label='模板' required>
            <Input placeholder='模板' />
          </Form.Item>
          <Form.Item label='公/私有' required>
            <Select>
              <Option value='公有'>公有</Option>
              <Option value='私有'>私有</Option>
            </Select>
          </Form.Item>
          <Form.Item label='所有驱动' required>
            <Select>
              <Option value='Mqtt'>Mqtt</Option>
              <Option value='Opc Ua'>Opc Ua</Option>
              <Option value='Opc Da'>Opc Da</Option>
              <Option value='Modbus Tcp'>Modbus Tcp</Option>
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
