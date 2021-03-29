import React from 'react';
import { Tabs, Statistic } from 'antd';
import { AlertOutlined } from '@ant-design/icons';

import './style.css';
const { TabPane } = Tabs;

export default () => {
  return (
    <>
      <Tabs title='近日告警次数' defaultActiveKey='1' centered>
        <TabPane tab='前天' key='1'>
          <div className='warning-number'>
            <Statistic
              title='告警次数'
              prefix={<AlertOutlined />}
              value={75}
              suffix='次'
            />
          </div>
        </TabPane>
        <TabPane tab='昨天' key='2'>
          <div className='warning-number'>
            <Statistic
              title='告警次数'
              prefix={<AlertOutlined />}
              value={90}
              suffix='次'
            />
          </div>
        </TabPane>
        <TabPane tab='今天' key='3'>
          <div className='warning-number'>
            <Statistic
              title='告警次数'
              prefix={<AlertOutlined />}
              value={83}
              suffix='次'
            />
          </div>
        </TabPane>
      </Tabs>
    </>
  );
};
