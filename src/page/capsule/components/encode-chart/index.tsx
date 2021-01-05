import React from 'react';
import * as echarts from 'echarts';
const data = require('./life-expectancy-table.json');
export default class EncodeChart extends React.Component<any, any> {
  private encodeChartRef: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.encodeChartRef = React.createRef();
  }
  componentDidMount() {
    this.initCharts();
  }
  initCharts = () => {
    let encodeChart = echarts.init(
      this.encodeChartRef.current as HTMLDivElement
    );
    let sizeValue = '66%';
    let symbolSize = 2.5;
    let option = {
      legend: {},
      tooltip: {},
      toolbox: {
        left: 'center',
        feature: {
          dataZoom: {},
        },
      },
      grid: [
        { right: sizeValue, bottom: '25%' },
        { left: sizeValue, bottom: '25%' },
      ],
      xAxis: [
        {
          type: 'value' as 'value',
          gridIndex: 0,
          name: 'Income',
          axisLabel: { rotate: 50, interval: 0 },
        },
        {
          type: 'category' as 'category',
          gridIndex: 1,
          name: 'Country',
          boundaryGap: false,
          axisLabel: { rotate: 50, interval: 0 },
        },
      ],
      yAxis: [
        { type: 'value' as 'value', gridIndex: 0, name: 'Life Expectancy' },
        { type: 'value' as 'value', gridIndex: 1, name: 'Income' },
      ],
      dataset: {
        dimensions: [
          'Income',
          'Life Expectancy',
          'Population',
          'Country',
          { name: 'Year', type: 'ordinal' },
        ],
        source: data,
      },
      series: [
        {
          type: 'scatter' as 'effectScatter',
          symbolSize: symbolSize,
          xAxisIndex: 0,
          yAxisIndex: 0,
          encode: {
            x: 'Income',
            y: 'Life Expectancy',
            tooltip: [0, 1, 2, 3, 4],
          },
        },
        {
          type: 'scatter' as 'effectScatter',
          symbolSize: symbolSize,
          xAxisIndex: 1,
          yAxisIndex: 1,
          encode: {
            x: 'Country',
            y: 'Income',
            tooltip: [0, 1, 2, 3, 4],
          },
        },
      ],
    };
    encodeChart.setOption(option);
  };
  render() {
    return (
      <div ref={this.encodeChartRef} style={{ width: 1000, height: 400 }}></div>
    );
  }
}
