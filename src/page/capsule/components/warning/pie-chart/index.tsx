import React from 'react';
import { Tabs } from 'antd';

import Before from './before-yesterday';
import Yesterday from './yesterday';
import Today from './today';

const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}

export default () => (
  <Tabs title="告警趋势" defaultActiveKey="1" onChange={callback} centered>
    <TabPane tab="前天" key="1">
      <Before />
    </TabPane>
    <TabPane tab="昨天" key="2">
      <Yesterday />
    </TabPane>
    <TabPane tab="今天" key="3" className="box3">
      <Today />
    </TabPane>
  </Tabs>
);
