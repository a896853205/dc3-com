import React from 'react';
import { Tabs } from 'antd';

import Pie from './Pie';

const { TabPane } = Tabs;

export default () => {
  const data1 = [
    { value: 20, name: '温湿度' },
    { value: 0, name: '水浸' },
  ];
  const data2 = [
    { value: 15, name: '温湿度' },
    { value: 0, name: '水浸' },
  ];
  const data3 = [
    { value: 25, name: '温湿度' },
    { value: 0, name: '水浸' },
  ];
  return (
    <div>
      <div>
        <Tabs title="告警趋势" defaultActiveKey="1" centered>
          <TabPane tab="前天" key="1">
            <Pie data={data1} />
          </TabPane>
          <TabPane tab="昨天" key="2">
            <Pie data={data2} />
          </TabPane>
          <TabPane tab="今天" key="3">
            <Pie data={data3} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
