import React from 'react';

import BarChart from '../bar-chart';
import TMap from '../map';
import PieChart from 'src/page/capsule/components/warning/pie-chart';
import LineChart from 'src/page/capsule/components/warning/line-chart/index';
import List from 'src/page/capsule/components/warning/list';

import './style.css';

export default () => (
  <div className='outter-container'>
    <div className='col12 item-box'>多选框</div>
    <div className='col3 item-box'>
      <ul>
        <li>U位使用率</li>
        <li>功率监控/kW</li>
        <li>能耗监控/mWh</li>
        <li>UPS负载/kW</li>
      </ul>
    </div>
    <div className='col6'>
      <div className='item-box'>
        <BarChart />
      </div>
      <div className='item-box'>
        <TMap />
      </div>
    </div>
    <div className='col3 item-box'>
      <div className='item-box1'>
        <h3>告警趋势</h3>
        <PieChart />
      </div>
      <div className='item-box2'>
        <h3>告警处理进度</h3>
        <LineChart />
      </div>
      <div>
        <h3>最近告警详情</h3>
        <List />
      </div>
    </div>
  </div>
);
