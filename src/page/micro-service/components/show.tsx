import React, { useState } from 'react';
import { Table } from 'antd';
import Mock from 'mockjs';

import './style.css';
import 'src/page/style/style.css';

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

const { data } = Mock.mock({
  'data|15': [
    {
      'key|+1': 1,
      'name|+1': [
        'rook-ceph-osd-prepare-k8s-n',
        'rook-ceph-tools-f56f69476-w',
        'rook-dicover-crdtq',
        'rook-discover-gnz45',
        'rook-discover-kqpbc',
        'web-front',
        'web-front02',
        'rook-ceph-mon-a-7b4d67ff88',
        'rook-ceph-mon-b-5b4d67ff88',
        'rook-ceph-mon-b-654d67ff88',
        'rook-ceph-mon-d-0b4c67ff88',
      ],
      'namespace|+1': [
        'rook-ceph',
        'rook-ceph',
        'rook-ceph',
        'default',
        'default',
        'rook-ceph',
        'rook-ceph',
      ],
      'containers|+1': ['■☐', '■', '■', '■', '■', '■', '■☐☐', '■☐☐', '■☐☐'],
      'restarts|1-13': 13,
      'controlled|+1': [
        'Job',
        'ReplicaSet',
        'DaemonSet',
        'DaemonSet',
        '',
        '',
        '',
        'ReplicaSet',
        'ReplicaSet',
      ],
      'qos|+1': ['BestEffort'],
      'age|+1': ['1d', '30d', '30d', '30d', '30d', '30d', '30d', '30d'],
      'status|+1': [
        'Completed',
        'Completed',
        'running',
        'running',
        'running',
        'running',
        'running',
      ],
    },
  ],
});

data.push({ data });

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
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      size='small'
      rowClassName='dc3-table-row'
    />
  );
};
