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
    name: `rook-ceph-osd-prepare-k8s-n`,
    namespace: 'rook-ceph',
    containers: '■☐',
    restarts: 0,
    controlled: 'Job',
    qos: 'BestEffort',
    age: '1d',
    status: 'Completed',
  },
  {
    key: 2,
    name: 'rook-ceph-tools-f56f69476-w',
    namespace: 'rook-ceph',
    containers: '■',
    restarts: 0,
    controlled: 'ReplicaSet',
    qos: 'BestEffort',
    age: '30d',
    status: 'Running',
  },
  {
    key: 3,
    name: 'rook-dicover-crdtq',
    namespace: 'rook-ceph',
    containers: '■',
    restarts: 0,
    controlled: 'DaemonSet',
    qos: 'BestEffort',
    age: '30d',
    status: 'Running',
  },
  {
    key: 4,
    name: 'rook-discover-gnz45',
    namespace: 'rook-ceph',
    containers: '■',
    restarts: 0,
    controlled: 'DaemonSet',
    qos: 'BestEffort',
    age: '30d',
    status: 'Running',
  },
  {
    key: 5,
    name: 'rook-discover-kqpbc',
    namespace: 'rook-ceph',
    containers: '■',
    restarts: 13,
    controlled: 'DaemonSet',
    qos: 'BestEffort',
    age: '30d',
    status: 'Running',
  },
  {
    key: 6,
    name: 'web-front',
    namespace: 'default',
    containers: '■',
    restarts: 0,
    controlled: '',
    qos: 'BestEffort',
    age: '13d',
    status: 'Running',
  },
  {
    key: 7,
    name: 'web-front02',
    namespace: 'default',
    containers: '■',
    restarts: 0,
    controlled: '',
    qos: 'BestEffort',
    age: '13d',
    status: 'Running',
  },
  {
    key: 8,
    name: 'rook-ceph-mon-a-7b4d67ff88',
    namespace: 'rook-ceph',
    containers: '■☐☐',
    restarts: 0,
    controlled: 'ReplicaSet',
    qos: 'BestEffort',
    age: '30d',
    status: 'Running',
  },
  {
    key: 9,
    name: 'rook-ceph-mon-b-5b4d67ff88',
    namespace: 'rook-ceph',
    containers: '■☐☐',
    restarts: 0,
    controlled: 'ReplicaSet',
    qos: 'BestEffort',
    age: '30d',
    status: 'Running',
  },
  {
    key: 10,
    name: 'rook-ceph-mon-b-654d67ff88',
    namespace: 'rook-ceph',
    containers: '■☐☐',
    restarts: 0,
    controlled: 'ReplicaSet',
    qos: 'BestEffort',
    age: '30d',
    status: 'Running',
  },
  {
    key: 11,
    name: 'rook-ceph-mon-d-0b4c67ff88',
    namespace: 'rook-ceph',
    containers: '■☐☐',
    restarts: 0,
    controlled: 'ReplicaSet',
    qos: 'BestEffort',
    age: '30d',
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
