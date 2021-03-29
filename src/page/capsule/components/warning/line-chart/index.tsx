import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

export default () => {
  let lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lineChart = echarts.init(lineRef.current as HTMLDivElement);
    let option = {
      tooltip: {
        trigger: 'axis' as 'axis',
      },
      legend: {
        top: '2%',
        left: '30%',
        data: ['温湿度传感器'],
      },
      grid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category' as 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      yAxis: {
        type: 'value' as 'value',
      },
      series: [
        {
          name: '温湿度传感器',
          type: 'line' as 'line',
          stack: '总量',
          data: [50, 60, 78, 90, 68, 95, 100],
        },
      ],
    };
    lineChart.setOption(option);
  }, []);

  return <div ref={lineRef} style={{ width: 300, height: 200 }}></div>;
};
