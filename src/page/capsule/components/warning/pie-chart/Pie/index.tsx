import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

function Pie(props: any) {
  const { data } = props;
  let pieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let pieChart = echarts.init(pieRef.current as HTMLDivElement);
    let option = {
      title: {
        left: 'center',
      },
      tooltip: {
        trigger: 'item' as 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        top: '10%',
        left: '75%',
        data: ['温湿度', '水浸'],
      },
      series: [
        {
          type: 'pie' as 'pie',
          radius: '25%',
          center: ['50%', '25%'],
          selectedMode: 'single' as 'single',
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    pieChart.setOption(option);
  }, [data]);

  return <div ref={pieRef} style={{ width: 300, height: 200 }}></div>;
}

export default Pie;
