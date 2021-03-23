import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

function Pie(props: any) {
  const { data } = props;
  let pieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let pieChart = echarts.init(pieRef.current as HTMLDivElement);
    let option = {
      title: {
        text: '告警百分比',
        left: 'center',
      },
      tooltip: {
        trigger: 'item' as 'item',
      },
      legend: {
        orient: 'vertical' as 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '数据来源',
          type: 'pie' as 'pie',
          radius: '50%',
          data: [
            { value: 36, name: '温湿度传感器-1' },
            { value: 24, name: '温湿度传感器-2' },
            { value: 18, name: '温湿度传感器-3' },
            { value: 22, name: '温湿度传感器-4' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    pieChart.setOption(option);
  }, [data]);

  return <div ref={pieRef} style={{ width: 600, height: 400 }}></div>;
}

export default Pie;
