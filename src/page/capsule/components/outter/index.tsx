import React from 'react';

import BarChart from '../bar-chart';
import WarningNumber from 'src/page/capsule/components/warning/warning-number';
import StepLine from '../step-line/index';
import LineChart from 'src/page/capsule/components/warning/line-chart/index';
import List from 'src/page/capsule/components/warning/list';
import EnergyChart from '../Energy-monitor';
import UpsChart from '../ups';
import RateChart from '../rate-monitor';

import './style.css';

export default () => (
  <>
    <div className='outter-container'>
      <div className='col3 item-box'>
        <ul>
          <li>
            <RateChart />
          </li>
          <li>
            <EnergyChart />
          </li>
          <li>
            <UpsChart />
          </li>
        </ul>
      </div>
      <div className='col6'>
        <div className='item-box'>
          <BarChart />
        </div>
        <div className='item-box'>
          <StepLine />
        </div>
      </div>
      <div className='col3 item-box'>
        <div className='item-box1'>
          <h3>告警趋势</h3>
          <WarningNumber />
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
  </>
);
