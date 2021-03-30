/**
 * 分组信息
 */
import React from 'react';
import { Descriptions, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <Descriptions
        bordered
        title='分组信息'
        size='small'
        extra={
          <Button type='primary' icon={<EditOutlined />}>
            编辑分组信息
          </Button>
        }
      >
        <Descriptions.Item label='分组名称'>ModbusTcp-group</Descriptions.Item>
        <Descriptions.Item label='分组ID'>
          wth1qhDt1BG9kzBon8xi010200
        </Descriptions.Item>
        <Descriptions.Item label='设备总数'>1</Descriptions.Item>
        <Descriptions.Item label='激活设备'>0</Descriptions.Item>
        <Descriptions.Item label='创建时间'>
          2021/01/13 17:46:50
        </Descriptions.Item>
        <Descriptions.Item label='分组描述'>
          ModbusTcp-group设备分组
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
