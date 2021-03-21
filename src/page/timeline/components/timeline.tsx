import React from 'react';

import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import Content from './content';

export default () => {
  const description = [
    '设备接入模块可方便快捷的实现设备的接入与配置，我们提供可视化的配置模式，方便用户接入设备',
    '设备数据管理模块主要进行数据的管理，其主要分为3个部分：1. 采集参数设置 2. 实时数据查看 3. 历史数据管理',
    '状态监控模块主要用于数据的可视化展示，其主要分为2个部分：1. 设备状态监控 2. 平台状态监控 ',
    '告警管理模块主要用于实现告警数据的展示和管理，其主要分为两个部分：1. 告警模式设置 2. 告警数据管理',
    '用户管理模块主要用于用户数据的展示和管理',
  ];
  return (
    <>
      <Timeline mode="alternate">
        <Timeline.Item dot={<ClockCircleOutlined />}>
          <Content title="设备接入" description={description[0]} />
        </Timeline.Item>
        <Timeline.Item dot={<ClockCircleOutlined />}>
          <Content title="设备数据管理" description={description[1]} />
        </Timeline.Item>
        <Timeline.Item dot={<ClockCircleOutlined />}>
          <Content title="状态监控" description={description[2]} />
        </Timeline.Item>
        <Timeline.Item dot={<ClockCircleOutlined />}>
          <Content title="告警管理" description={description[3]} />
        </Timeline.Item>
        <Timeline.Item dot={<ClockCircleOutlined />}>
          <Content title="用户管理" description={description[4]} />
        </Timeline.Item>
      </Timeline>
    </>
  );
};
