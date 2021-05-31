import React from 'react';

import { v1 } from 'uuid';
import moment from 'moment';
import { Steps, Popover } from 'antd';

import BreadcrumbList from '../../../components/Breadcrumb/Breadcrumb';
import Chart from './chart';

require('moment/locale/zh-cn');

const { Step } = Steps;
const customDot = (dot: any) => {
  return (
    <Popover
      content={
        <ul
          style={{
            margin: 0,
          }}>
          <li>部署方案版本: {v1()}</li>
          <li>部署修改时间: 36.32s</li>
          <li>部署结束时间: {moment().format('YYYY-MM-DD HH:MM:SS')}</li>
          <li>重新部署原因: 修改告警配置</li>
        </ul>
      }>
      {dot}
    </Popover>
  );
};

const Compose = () => (
  <>
    <BreadcrumbList />
    <div>
      <Steps current={1} progressDot={customDot}>
        <Step
          title={moment().format('YYYY-MM')}
          description={moment().format('DD号 HH:MM:SS')}
        />
        <Step
          title={moment().format('YYYY-MM')}
          description={moment().format('DD号 HH:MM:SS')}
        />
        <Step
          title={moment().format('YYYY-MM')}
          description={moment().format('DD号 HH:MM:SS')}
        />
      </Steps>
      <Chart />
    </div>
  </>
);

export default Compose;
