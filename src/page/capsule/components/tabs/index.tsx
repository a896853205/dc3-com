import React from 'react';
import { Tabs } from 'antd';
import Outter from '../outter/index';

const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}
export default () => (
  <Tabs defaultActiveKey='1' onChange={callback}>
    <TabPane tab='温湿度传感器' key='1'>
      <Outter />
    </TabPane>
    <TabPane tab='水浸传感器' key='2'>
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab='空调' key='3'>
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab='电表' key='4'>
      Content of Tab Pane 4
    </TabPane>
    <TabPane tab='门磁传感器' key='5'>
      Content of Tab Pane 5
    </TabPane>
    <TabPane tab='烟雾传感器' key='6'>
      Content of Tab Pane 6
    </TabPane>
  </Tabs>
);
