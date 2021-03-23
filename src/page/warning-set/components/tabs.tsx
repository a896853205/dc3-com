import React from 'react';
import { Tabs } from 'antd';
import Temperature from './temperature';

const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}
export default () => (
  <Tabs defaultActiveKey='1' onChange={callback}>
    <TabPane tab='温湿度传感器' key='1'>
      <Temperature />
    </TabPane>
    <TabPane tab='水浸传感器' key='2'>
      <Temperature />
    </TabPane>
    <TabPane tab='空调' key='3'>
      <Temperature />
    </TabPane>
    <TabPane tab='电表' key='4'>
      <Temperature />
    </TabPane>
    <TabPane tab='门磁传感器' key='5'>
      <Temperature />
    </TabPane>
    <TabPane tab='烟雾传感器' key='6'>
      <Temperature />
    </TabPane>
  </Tabs>
);
