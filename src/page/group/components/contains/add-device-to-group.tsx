import React, { useState } from 'react';
import { Select, Input, Space, Tag, Table, Button } from 'antd';
import Mock from 'mockjs';

const { Option } = Select;
const { Search } = Input;

const columns = [
  {
    title: '设备名',
    dataIndex: 'name',
  },
  {
    title: '设备所属产品',
    dataIndex: 'modal',
  },
  {
    title: '状态/启用状态',
    dataIndex: 'status',
    render: (status: any) => {
      let color = 'geekblue';
      switch (status) {
        case '未激活':
          color = 'orange';
          break;
        case '在线':
          color = 'green';
          break;
        case '离线':
          color = 'gray';
          break;
        case '已禁用':
          color = 'volcano';
          break;
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: '最后上线时间',
    dataIndex: 'onlineTime',
  },
];
const { data } = Mock.mock({
  'data|100': [
    {
      'key|+1': 1,
      'name|+1': [
        'ModbusTcp-Device',
        'Mqtt-Device',
        'OpcUa-Device',
        'OpcDa-Device',
      ],
      'modal|+1': [
        'ModbusTcpProfile',
        'MqttProfile',
        'OpcUaProfile',
        'OpcDaProfile',
      ],
      'status|+1': ['未激活', '在线', '离线', '已禁用'],
      onlineTime: '@date("yyyy-MM-dd HH:mm:ss")',
    },
  ],
});
export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSearch = () => {};
  const onChange = () => {};
  // 向分组添加设备
  const addDevice = () => {
    setSelectedRowKeys([]);
  };
  return (
    <>
      <Space>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder='请选择产品'
          optionFilterProp='children'
          onSearch={onSearch}
          onChange={onChange}
        >
          <Option value='	ModbusTcpProfile'>ModbusTcpProfile</Option>
          <Option value='MqttProfile'>MqttProfile</Option>
          <Option value='	OpcUaProfile'>OpcUaProfile</Option>
        </Select>
        <Search placeholder='请输入设备名称' style={{ width: 250 }} />
      </Space>
      <Table
        rowSelection={{ type: 'checkbox', ...selectedRowKeys }}
        columns={columns}
        dataSource={data}
        style={{ marginTop: 10 }}
      />
      <Space>
        <Button type='primary' onClick={addDevice}>
          确定
        </Button>
        <Button type='default'>取消</Button>
      </Space>
    </>
  );
};
