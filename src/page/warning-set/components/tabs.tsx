import React from 'react';
import { Tabs, Alert } from 'antd';
import Temperature from './temperature';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';

const { TabPane } = Tabs;

function callback() {}
export default () => (
  <>
    <Breadcrumb />
    <Alert message='Informational Notes' type='info' showIcon />
    <Tabs defaultActiveKey='1' onChange={callback}>
      <TabPane tab='一般告警' key='1'>
        <Tabs defaultActiveKey='1' onChange={callback}>
          <TabPane tab='温湿度传感器' key='1'>
            <Temperature />
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
      </TabPane>
      <TabPane tab='重要实时告警' key='2'>
        <Tabs defaultActiveKey='1' onChange={callback}>
          <TabPane tab='温湿度传感器' key='1'>
            <Temperature />
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
      </TabPane>
    </Tabs>
  </>
);
