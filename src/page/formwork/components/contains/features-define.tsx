import React from 'react';
import { Tabs } from 'antd';

import AddFeatures from '../contains/add-features';

const { TabPane } = Tabs;

export default () => {
  return (
    <>
      <Tabs tabPosition='left'>
        <TabPane tab='default' key='1'>
          <AddFeatures />
        </TabPane>
        <TabPane tab='温湿度传感器module' key='2'>
          <AddFeatures />
        </TabPane>
      </Tabs>
    </>
  );
};
