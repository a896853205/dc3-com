import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

function StepLine(props: any) {
  const { data } = props;
  let stepLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let stepLineChart = echarts.init(stepLineRef.current as HTMLDivElement);
    let option = {
      title: {
        text: '告警次数趋势',
      },
      tooltip: {
        trigger: 'axis' as 'axis',
      },
      legend: {
        data: ['Step Start', 'Step Middle', 'Step End'],
      },
      grid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category' as 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      yAxis: {
        type: 'value' as 'value',
      },
      series: [
        {
          name: '温湿度传感器',
          type: 'line' as 'line',
          step: 'start' as 'start',
          data: [65, 83, 60, 79, 96, 87, 70],
        },
      ],
      color: ['#ee6666']
    };
    stepLineChart.setOption(option);
  }, [data]);

  return <div ref={stepLineRef} style={{ width: 600, height: 400 }}></div>;
}

export default StepLine;
