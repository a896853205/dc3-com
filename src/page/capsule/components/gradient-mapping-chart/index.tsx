import React from 'react';
import * as echarts from 'echarts';
const obama_budget_2012 = require('./obama_budget_proposal_2012.json');
console.log(obama_budget_2012);
export default class BarChart extends React.Component<any, any> {
  private gradientMappingRef: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.gradientMappingRef = React.createRef();
    this.state = {
      household_america_2012: 113616229,
      visualMin: -100,
      visualMax: 100,
      visualMinBound: -40,
      visualMaxBound: 40,
    };
  }

  componentDidMount() {
    this.initCharts();
  }
  convertData(originList: any): void {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < originList.length; i++) {
      let node = originList[i];
      if (node) {
        let value = node.value;
        value[2] != null && value[2] < min && (min = value[2]);
        value[2] != null && value[2] > max && (max = value[2]);
      }
    }

    for (let i = 0; i < originList.length; i++) {
      let node = originList[i];
      if (node) {
        let value = node.value;

        // Scale value for visual effect
        if (value[2] != null && value[2] > 0) {
          value[3] = (echarts as any).number.linearMap(
            value[2],
            [0, max],
            [this.state.visualMaxBound, this.state.visualMax],
            true
          );
        } else if (value[2] != null && value[2] < 0) {
          value[3] = (echarts as any).number.linearMap(
            value[2],
            [min, 0],
            [this.state.visualMin, this.state.visualMinBound],
            true
          );
        } else {
          value[3] = 0;
        }

        if (!isFinite(value[3])) {
          value[3] = 0;
        }

        if (node.children) {
          this.convertData(node.children);
        }
      }
    }
  }
  isValidNumber(num: any) {
    return num != null && isFinite(num);
  }
  initCharts = () => {
    let gradientMappingChart = echarts.init(
      this.gradientMappingRef.current as HTMLDivElement
    );
    gradientMappingChart.showLoading();
    gradientMappingChart.hideLoading();
    this.convertData(obama_budget_2012);
    let option = {
      title: {
        left: 'center',
        text: 'Gradient Mapping',
        subtext: 'Growth > 0: green; Growth < 0: red; Growth = 0: grey',
      },
      tooltip: {
        formatter: (info: any) => {
          let value = info.value;
          let amount = value[0];
          amount = this.isValidNumber(amount)
            ? (echarts as any).format.addCommas(amount * 1000) + '$'
            : '-';

          let amount2011 = value[1];
          amount2011 = this.isValidNumber(amount2011)
            ? (echarts as any).format.addCommas(amount2011 * 1000) + '$'
            : '-';

          let change = value[2];
          change = this.isValidNumber(change) ? change.toFixed(2) + '%' : '-';

          return [
            '<div class="tooltip-title">' +
              (echarts as any).format.encodeHTML(info.name) +
              '</div>',
            '2012 Amount: &nbsp;&nbsp;' + amount + '<br>',
            '2011 Amount: &nbsp;&nbsp;' + amount2011 + '<br>',
            'Change From 2011: &nbsp;&nbsp;' + change,
          ].join('');
        },
        textstyle: {
          color: '#eee',
        },
      },
      series: [
        {
          name: 'ALL',
          top: 80,
          type: 'treemap' as 'treemap',
          label: {
            show: true,
            formatter: '{b}',
            normal: {
              textStyle: {
                ellipsis: true,
              },
            },
          },
          visualMin: this.state.visualMin,
          visualMax: this.state.visualMax,
          visualDimension: 3,
          levels: [
            {
              itemStyle: {
                borderWidth: 3,
                gapWidth: 3,
              },
            },
            {
              color: ['#cc9966', '#cccc66', '#669999'],
              colorMappingBy: 'value' as 'value',
              itemStyle: {
                gapWidth: 1,
              },
            },
          ],
          data: obama_budget_2012 as any,
        },
      ],
    };
    gradientMappingChart.setOption(option);
  };

  render() {
    return (
      <div
        ref={this.gradientMappingRef}
        style={{ width: 800, height: 500 }}
      ></div>
    );
  }
}
