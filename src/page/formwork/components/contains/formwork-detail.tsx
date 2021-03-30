/**
 * 产品详情
 */
import React from 'react';
import { Descriptions, Button, Badge } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <Descriptions
        bordered
        title='产品信息'
        size='small'
        extra={
          <Button type='primary' icon={<EditOutlined />}>
            编辑产品信息
          </Button>
        }
      >
        <Descriptions.Item label='产品名称'>ModbusTcpProfile</Descriptions.Item>
        <Descriptions.Item label='创建日期'>
          1974-07-08 08:15:38
        </Descriptions.Item>
        <Descriptions.Item label='所属驱动'>ModbusDriver</Descriptions.Item>
        <Descriptions.Item label='所属品类'>标准品类</Descriptions.Item>
        <Descriptions.Item label='状态' span={3}>
          <Badge status='processing' text='已使用' />
        </Descriptions.Item>
        <Descriptions.Item label='产品描述'>
          ModbusTcpProfile产品为温湿度传感器一类产品
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
