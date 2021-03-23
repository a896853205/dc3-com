import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

function Bar(props: any) {
  const { data } = props;
  let BarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let barChart = echarts.init(BarRef.current as HTMLDivElement);
    let option = {
      title: {
        text: '告警次数',
      },
      xAxis: {
        type: 'category' as 'category',
        data: [
          '温湿度传感器-1',
          '温湿度传感器-2',
          '温湿度传感器-3',
          '温湿度传感器-4',
        ],
      },
      yAxis: {
        type: 'value' as 'value',
      },
      series: [
        {
          data: [
            30,
            {
              value: 20,
              itemStyle: {
                color: 'lightgreen',
              },
            },
            {
              value: 15,
              itemStyle: {
                color: 'orange',
              },
            },
            {
              value: 18,
              itemStyle: {
                color: 'tomato',
              },
            },
          ],
          type: 'bar' as 'bar',
        },
      ],
    };
    barChart.setOption(option);
  }, [data]);

  return <div ref={BarRef} style={{ width: 600, height: 400 }}></div>;
}

export default Bar;
