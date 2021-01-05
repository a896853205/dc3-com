import React from 'react';
import * as echarts from 'echarts';
export default class CalendarHeatmapChart extends React.Component<any, any> {
  private calendarHeatmapRef: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.calendarHeatmapRef = React.createRef();
  }
  componentDidMount() {
    this.initCharts();
  }
  getVirtulData(year: string) {
    year = year || '2017';
    let date = +(echarts as any).number.parseDate(year + '-01-01');
    let end = +(echarts as any).number.parseDate(+year + 1 + '-01-01');
    let dayTime = 3600 * 24 * 1000;
    let data = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        (echarts as any).format.formatTime('yyyy-MM-dd', time),
        Math.floor(Math.random() * 10000),
      ]);
    }
    return data;
  }

  initCharts = () => {
    let calendarHeatmapChart = echarts.init(
      this.calendarHeatmapRef.current as HTMLDivElement
    );
    let option = {
      title: {
        top: 30,
        left: 'center',
        text: '2016年某人每天的步数',
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise' as 'piecewise',
        orient: 'horizontal' as 'horizontal',
        left: 'center',
        top: 65,
        textStyle: {
          color: '#000',
        },
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13] as any[],
        range: '2016',
        itemStyle: {
          borderWidth: 0.5,
        },
        yearLabel: { show: false },
      },
      series: {
        type: 'heatmap' as 'heatmap',
        coordinateSystem: 'calendar' as 'calendar',
        data: this.getVirtulData('2016'),
      },
    };
    calendarHeatmapChart.setOption(option);
  };
  render() {
    return (
      <div
        ref={this.calendarHeatmapRef}
        style={{ width: 500, height: 300 }}
      ></div>
    );
  }
}
