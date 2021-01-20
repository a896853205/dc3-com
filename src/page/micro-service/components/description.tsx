import React from 'react';

import { Descriptions, Tag } from 'antd';

import './style.css';

export default () => {
  return (
    <Descriptions title="Memory" bordered column={1}>
      <Descriptions.Item label="Created">
        30d 20h 35m ago (2021-01-06T10:15:19z)
      </Descriptions.Item>
      <Descriptions.Item label="Name">
        rook-ceph-mon-a-7b4d67ff88
      </Descriptions.Item>
      <Descriptions.Item label="Namespace">rook-ceph</Descriptions.Item>
      <Descriptions.Item label="Labels">
        <Tag>app=rook-ceph-mgr</Tag>
        <Tag>ceph_daemon_id=a</Tag>
        <Tag>instance=a</Tag>
        <Tag>mgr=a</Tag>
        <Tag>pod-template-hash=7b4d67ff88</Tag>
        <Tag>rook_cluster=rook-ceph</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="Annotations">
        <Tag>prometheus.io/port=9283</Tag>
        <Tag>prometheus.io/scrape=true</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="Controlled By">
        <span>ReplicaSet</span>
        <span className="span1"> rook-ceph-mon-a-7b4d67ff88</span>
      </Descriptions.Item>
      <Descriptions.Item label="Status">
        <span className="span2">Running</span>
      </Descriptions.Item>
      <Descriptions.Item label="Node">
        <span className="span3">k8s-note02</span>
      </Descriptions.Item>
      <Descriptions.Item label="Pod IP">10.244.3.19</Descriptions.Item>
      <Descriptions.Item label="Priority Class">-</Descriptions.Item>
      <Descriptions.Item label="QoS Class">BestEffort</Descriptions.Item>
    </Descriptions>
  );
};
