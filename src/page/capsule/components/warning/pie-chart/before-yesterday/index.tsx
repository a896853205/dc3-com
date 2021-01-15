import React from 'react';
import * as echarts from 'echarts';

export default class PieChart extends React.Component<any, any> {
  private pieRef: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.pieRef = React.createRef();
  }
  componentDidMount() {
    this.initCharts();
  }
  initCharts = () => {
    let pieChart = echarts.init(this.pieRef.current as HTMLDivElement);
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
          data: [
            { value: 7, name: '温湿度' },
            { value: 0, name: '水浸' },
          ],
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
  };
  render() {
    return <div ref={this.pieRef} style={{ width: 300, height: 200 }}></div>;
  }
}
