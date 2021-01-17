import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

export default () => {
  let barRef = useRef<HTMLDivElement>(null);

  const dataCount = 5e4;

  useEffect(() => {
    let barChart = echarts.init(barRef.current as HTMLDivElement);
    let data = generateData(dataCount);
    let option = {
      title: {
        text: 'CPU',
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
  }, []);

  function generateData(count: number) {
    let baseValue = Math.random() * 1000;
    let time = +new Date(2021, 0, 1);
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

  return <div ref={barRef} style={{ width: 700, height: 300 }}></div>;
};
