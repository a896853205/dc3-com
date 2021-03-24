import React from 'react';
import { Tabs, Statistic, Col } from 'antd';

import './style.css';
const { TabPane } = Tabs;

export default () => {
  return (
    <>
      <Tabs title='告警趋势' defaultActiveKey='1' centered>
        <TabPane tab='前天' key='1'>
          <div className='warning-number'>
            <Col span={12}>
              <Statistic
                title='告警次数'
                value={75}
                valueStyle={{ color: '#cf1322' }}
              />
            </Col>
          </div>
        </TabPane>
        <TabPane tab='昨天' key='2'>
          <div className='warning-number'>
            <Col span={12}>
              <Statistic
                title='告警次数'
                value={90}
                valueStyle={{ color: '#cf1322' }}
              />
            </Col>
          </div>
        </TabPane>
        <TabPane tab='今天' key='3'>
          <div className='warning-number'>
            <Col span={12}>
              <Statistic
                title='告警次数'
                value={83}
                valueStyle={{ color: '#cf1322' }}
              />
            </Col>
          </div>
        </TabPane>
      </Tabs>
    </>
  );
};
