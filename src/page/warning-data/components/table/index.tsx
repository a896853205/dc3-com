import React from 'react';
import { Table, Input } from 'antd';

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
    dataIndex: 'starttime',
  },
  {
    title: '是否恢复',
    dataIndex: 'boolean',
  },
  {
    title: '恢复时间',
    dataIndex: 'endtime',
  },
];

const data = [
  {
    key: '1',
    number: '1',
    device: '温湿度传感器-1',
    content: '1号温湿度 通信状态：断线报警',
    starttime: '2021-3-22',
    boolean: '是',
    endtime: '2021-3-22',
  },
  {
    key: '1',
    number: '2',
    device: '温湿度传感器-2',
    content: '2号温湿度 湿度过低报警',
    starttime: '2021-3-22',
    boolean: '是',
    endtime: '2021-3-22',
  },
  {
    key: '1',
    number: '3',
    device: '温湿度传感器-3',
    content: '3号温湿度 温度过高报警',
    starttime: '2021-3-22',
    boolean: '是',
    endtime: '2021-3-22',
  },
  {
    key: '1',
    number: '4',
    device: '温湿度传感器-4',
    content: '4号温湿度 温度过高报警',
    starttime: '2021-3-22',
    boolean: '是',
    endtime: '2021-3-22',
  },
  {
    key: '1',
    number: '5',
    device: '温湿度传感器-5',
    content: '5号温湿度 湿度过低报警',
    starttime: '2021-3-22',
    boolean: '是',
    endtime: '2021-3-22',
  },
  {
    key: '1',
    number: '6',
    device: '温湿度传感器-6',
    content: '6号温湿度 通信状态：断线报警',
    starttime: '2021-3-22',
    boolean: '是',
    endtime: '2021-3-22',
  },
];

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
