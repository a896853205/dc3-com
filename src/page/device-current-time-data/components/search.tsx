import React from 'react';

import { Form, Button, Input, Select, Table } from 'antd';

import 'src/page/style/style.css';

const { Column } = Table;

export default ({ setUrlState }: { setUrlState: Function }) => {
  const onFinish = () => {};

  const data = [
    {
      key: 1,
      index: 1,
      device: 'ModbusTcp-Device',
      template: 'ModbusTcpProfile',
      storageStyle: '单点数据',
      state: '在线',
      remarks: 'modbus设备-温度传感器',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 2,
      index: 2,
      device: 'Mqtt-Device',
      template: 'MqttProfile',
      storageStyle: '单点数据',
      state: '在线',
      remarks: 'mqtt设备-湿度传感器',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 3,
      index: 3,
      device: 'OpcUa-Device',
      template: 'OpcUaProfile',
      storageStyle: '结构数据',
      state: '在线',
      remarks: 'OpcUa设备-水浸传感器',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 4,
      index: 4,
      device: 'OpcDa-Device',
      template: 'OpcDaProfile',
      storageStyle: '单点数据',
      state: '在线',
      remarks: 'OpcDa设备-空调传感器',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
  ];

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 10 }}
        layout='horizontal'
        onFinish={onFinish}
      >
        <Form.Item label='设备名'>
          <Input placeholder='设备' />
        </Form.Item>
        <Form.Item label='所属模板'>
          <Select></Select>
        </Form.Item>
        <Form.Item label='所属位号'>
          <Select></Select>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
          <Button type='primary'>搜索</Button>
        </Form.Item>
      </Form>
      <Table
        size='small'
        rowClassName='dc3-table-row'
        dataSource={data}
        onRow={record => {
          return {
            onClick: _event => {
              setUrlState({
                uuid: record.index,
              });
            },
          };
        }}
      >
        <Column title='#' dataIndex='index' key='index' />
        <Column title='设备' dataIndex='device' key='devce' />
        <Column title='所属模板' dataIndex='template' key='template' />
        <Column title='存储类型' dataIndex='storageStyle' key='storageStyle' />
        <Column title='状态' dataIndex='state' key='state' />
        <Column title='备注' dataIndex='remarks' key='remarks' />
      </Table>
    </>
  );
};
