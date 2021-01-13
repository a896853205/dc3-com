import React from 'react';

import TMap from '../map';

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
      <div className='item-box'>总览</div>
      <div className='item-box'>
        <TMap />
      </div>
    </div>
    <div className='col3 item-box'>
      <div>告警走势</div>
    </div>
  </div>
);
