import React from 'react';
import * as echarts from 'echarts';

export default class LineChart extends React.Component<any, any> {
  private lineRef: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.lineRef = React.createRef();
  }
  componentDidMount() {
    this.initCharts();
  }
  initCharts = () => {
    let lineChart = echarts.init(this.lineRef.current as HTMLDivElement);
    let option = {
      tooltip: {
        trigger: 'axis' as 'axis',
      },
      legend: {
        top: '2%',
        left: '25%',
        data: ['温湿度', '水浸'],
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '30%',
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
          name: '温湿度',
          type: 'line' as 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '水浸',
          type: 'line' as 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
    };
    lineChart.setOption(option);
  };
  render() {
    return <div ref={this.lineRef} style={{ width: 300, height: 200 }}></div>;
  }
}
