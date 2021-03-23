/**
 * UPS负载
 */
import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

const UpsChart = () => {
  let upsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let upsChart = echarts.init(upsRef.current as HTMLDivElement);
    let option = {
      title: {
        text: 'UPS负载/kW',
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
          data: [0.3, 0.5, 0.3, 0.6, 0.6, 0.7, 0.5],
        },
      ],
    };
    upsChart.setOption(option);
  });
  return (
    <>
      <div ref={upsRef} style={{ width: 250, height: 250 }}></div>
    </>
  );
};

export default UpsChart;
