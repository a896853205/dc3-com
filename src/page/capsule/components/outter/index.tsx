import React from 'react';

import BarChart from '../bar-chart';
import './style.css';

export default () => (
  <div className='outter-container'>
    <div className='col12 item-box'>
      <BarChart />
    </div>
    <div className='item-box'>映射为渐变色</div>
    <div className='item-box'>AQI 雷达图</div>
    <div className='col12 item-box'>3d Scatter with Scatter Matrix</div>
    <div className='col12 item-box'>日历热力图</div>
  </div>
);
