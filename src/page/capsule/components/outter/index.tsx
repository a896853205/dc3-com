import React from 'react';
import BarChart from '../bar-chart';
import CalendarHeadmapChart from '../calendar-heatmap-chart';
import EncodeChart from '../encode-chart';
import GradientMappingChart from '../gradient-mapping-chart';
import RadarChart from '../radar-chart';
import './style.css';

export default () => (
  <div className="outter-container">
    <div className="col12 item-box">
      <BarChart />
    </div>
    <div className="item-box">
      <GradientMappingChart />
    </div>
    <div className="item-box">
      <RadarChart />
    </div>
    <div className="col12 item-box">
      <EncodeChart />
    </div>
    <div className="col12 item-box">
      <CalendarHeadmapChart />
    </div>
  </div>
);
