import React, { useState } from 'react';
import { Table } from 'antd';

import './style.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Namespace',
    dataIndex: 'namespace',
    key: 'namespace',
  },
  {
    title: 'Containers',
    dataIndex: 'containers',
    className: 'containers',
    key: 'containers',
  },
  {
    title: 'Restarts',
    dataIndex: 'restarts',
    key: 'restarts',
  },
  {
    title: 'Controlled',
    dataIndex: 'controlled',
    className: 'controlled',
    key: 'controlled',
  },
  {
    title: 'Qos',
    dataIndex: 'qos',
    key: 'qos',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    className: 'status',
    key: 'status',
  },
];

const data: any = [];
data.push(
  {
    key: 1,
    name: `web-front1`,
    namespace: 'dafault',
    containers: '',
    restarts: 0,
    controlled: 'Job',
    qos: 'BestEffort',
    age: 32,
    status: 'Running',
  },
  {
    key: 2,
    name: `web-front2`,
    namespace: 'dafault',
    containers: '',
    restarts: 0,
    controlled: 'Job',
    qos: 'BestEffort',
    age: 32,
    status: 'Running',
  },
  {
    key: 3,
    name: 'web-front3',
    namespace: 'dafault',
    containers: '',
    restarts: 0,
    controlled: 'Job',
    qos: 'BestEffort',
    age: 32,
    status: 'Running',
  },
  {
    key: 4,
    name: 'web-front4',
    namespace: 'dafault',
    containers: '',
    restarts: 0,
    controlled: 'Job',
    qos: 'BestEffort',
    age: 32,
    status: 'Running',
  }
);

export default () => {
  const [selectedRowKeys, setselectedRowKeys] = useState();

  function onSelectChange(selectedRowKeys: any) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setselectedRowKeys(selectedRowKeys);
  }

  const rowSelection: any = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
  };
  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
};
