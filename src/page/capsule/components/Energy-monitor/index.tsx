/**
 * 能耗监控
 */
import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

const EnergyChart = () => {
  let energyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let energyChart = echarts.init(energyRef.current as HTMLDivElement);
    let option = {
      title: {
        text: '能耗监控/mWh',
        textStyle: {
          fontSize: 12,
        },
      },
      tooltip: {
        trigger: 'axis' as 'axis',
      },
      legend: {
        data: ['温湿度传感器'],
        x: 'right',
        y: 'top',
      },
      grid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category' as 'category',
        boundaryGap: false,
        data: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
      },
      yAxis: {
        type: 'value' as 'value',
      },
      series: [
        {
          name: '温湿度传感器',
          type: 'line' as 'line',
          data: [0.1, 0.5, 0.4, 0.6, 0.2, 0.4, 0.5],
        },
      ],
      color: ['#fac858'],
    };
    energyChart.setOption(option);
  });
  return (
    <>
      <div ref={energyRef} style={{ width: 250, height: 250 }}></div>
    </>
  );
};

export default EnergyChart;