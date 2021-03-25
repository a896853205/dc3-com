import React from 'react';
import { Table, Input } from 'antd';
import Mock from 'mockjs';

import 'src/page/style/style.css';

const { Search } = Input;
const columns = [
  {
    title: '序号',
    dataIndex: 'number',
    sorter: {
      compare: (a: any, b: any) => a.number - b.number,
      multiple: 3,
    },
  },
  {
    title: '设备',
    dataIndex: 'device',
  },
  {
    title: '告警内容',
    dataIndex: 'content',
  },
  {
    title: '时间',
    dataIndex: 'startTime',
  },
  {
    title: '是否恢复',
    dataIndex: 'state',
  },
  {
    title: '恢复时间',
    dataIndex: 'endTime',
  },
];
const { data } = Mock.mock({
  'data|100': [
    {
      'number|+1': 1,
      'device|+1': [
        '温湿度传感器-1',
        '温湿度传感器-2',
        '温湿度传感器-3',
        '温湿度传感器-4',
        '温湿度传感器-5',
      ],
      'content|+1': [
        '湿度过低',
        '湿度显示异常',
        '温度显示异常',
        '温度过高',
        '温度远超正常值',
      ],
      startTime: '@date("yyyy-MM-dd HH:mm:ss")',
      state: '是',
      endTime: '@date("yyyy-MM-dd HH:mm:ss")',
    },
  ],
});

export default () => {
  function onChange(pagination: any, filters: any, sorter: any, extra: any) {
    console.log('params', pagination, filters, sorter, extra);
  }
  return (
    <>
      <Search placeholder='搜索' style={{ width: 200 }} />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        size='small'
        rowClassName='dc3-table-row'
      />
    </>
  );
};
