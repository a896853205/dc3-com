import React, { useCallback } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { useBoolean } from 'ahooks';

const { Option } = Select;

export default () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const dispatch = useDispatch();

  const onFinish = useCallback(() => {
    // TODO: HTTP请求后台增加

    // dispatch(addTagname());
    setFalse();
  }, [dispatch, setFalse]);

  return (
    <>
      <Button onClick={setTrue} type='primary'>
        添加自定义功能
      </Button>
      <Modal
        title='添加自定义功能'
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
          <Form.Item label='功能名称' required>
            <Input placeholder='请输入您的功能名称' />
          </Form.Item>
          <Form.Item label='标识符' required>
            <Input placeholder='请输入您的标识符' />
          </Form.Item>
          <Form.Item label='单位' required>
            <Select>
              <Option value='无'>无/</Option>
              <Option value='乏'>乏/var</Option>
              <Option value='相对湿度'>相对湿度/%RH</Option>
              <Option value='比特'>比特/bit</Option>
            </Select>
          </Form.Item>
          <Form.Item label='操作类型' required>
            <Select>
              <Option value='只读'>线圈状态（只读，0x01）</Option>
              <Option value='读写'>
                线圈状态（读写，读取使用0x01，写入使用0x05）
              </Option>
              <Option value='只写'>线圈状态（只写，0x05）</Option>
            </Select>
          </Form.Item>
          <Form.Item label='寄存器地址' required>
            <Input placeholder='请输入寄存器地址' />
          </Form.Item>
          <Form.Item label='原始数据类型' required>
            <Select>
              <Option value='bool'>bool</Option>
              <Option value='int16'>int16</Option>
            </Select>
          </Form.Item>
          <Form.Item label='取值范围' style={{ marginBottom: 0 }}>
            <Form.Item
              style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
            >
              <Input placeholder='0' />
            </Form.Item>
            <span
              style={{
                display: 'inline-block',
                width: '24px',
                lineHeight: '32px',
                textAlign: 'center',
              }}
            >
              ~
            </span>
            <Form.Item
              style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
            >
              <Input placeholder='1' />
            </Form.Item>
          </Form.Item>
          <Form.Item label='上报方式' required>
            <Select>
              <Option value='按时上报'>按时上报</Option>
              <Option value='变更上报'>变更上报</Option>
            </Select>
          </Form.Item>
          <Form.Item label='备注'>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
