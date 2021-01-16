import React from 'react';
import * as echarts from 'echarts';
export default class BarChart extends React.Component<any, any> {
  // 大数据量柱图
  private myRef: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      dataCount: 5e5,
    };
  }
  componentDidMount() {
    this.initCharts();
  }
  initCharts = () => {
    let barChart = echarts.init(this.myRef.current as HTMLDivElement);
    let data = this.generateData(this.state.dataCount);
    let option = {
      title: {
        text: (echarts as any).format.addCommas(this.state.dataCount) + ' Data',
        left: 10,
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: false as false,
          },
          saveAsImage: {
            pixelRatio: 2,
          },
        },
      },
      tooltip: {
        trigger: 'axis' as 'axis',
        axisPointer: {
          type: 'shadow' as 'shadow',
        },
      },
      grid: {
        bottom: 90,
      },
      dataZoom: [
        {
          type: 'inside' as 'inside',
        },
        {
          type: 'slider' as 'slider',
        },
      ],
      xAxis: {
        data: data.categoryData,
        silent: false,
        splitLine: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        axisLabel: {
          show: true,
        },
      },
      yAxis: {
        splitArea: {
          show: false,
        },
        axisLabel: {
          show: true,
        },
      },
      series: [
        {
          type: 'bar' as 'bar',
          data: data.valueData,
          // Set `large` for large data amount
          large: true,
        },
      ],
    };
    barChart.setOption(option);
  };
  generateData(count: number) {
    let baseValue = Math.random() * 1000;
    let time = +new Date(2011, 0, 1);
    let smallBaseValue: number;
    function next(idx: number) {
      smallBaseValue =
        idx % 30 === 0
          ? Math.random() * 700
          : smallBaseValue + Math.random() * 500 - 250;
      baseValue += Math.random() * 20 - 10;
      return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000);
    }

    let categoryData: any[] = [];
    let valueData = [];

    for (let i = 0; i < count; i++) {
      categoryData.push(
        (echarts as any).format.formatTime('yyyy-MM-dd\nhh:mm:ss', time)
      );
      valueData.push(next(i).toFixed(2));
      time += 1000;
    }

    return {
      categoryData: categoryData,
      valueData: valueData,
    };
  }
  render() {
    return <div ref={this.myRef} style={{ width: 600, height: 350 }}></div>;
  }
}
