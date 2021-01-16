/**
 * 功率监控
 */
import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";

const RateChart = () => {
  let rateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rateChart = echarts.init(rateRef.current as HTMLDivElement);
    let option = {
      title: {
        text: "功率监控/kW",
        textStyle: {
          fontSize: 12,
        },
      },
      tooltip: {
        trigger: "axis" as "axis",
      },
      legend: {
        data: ["温度", "湿度"],
        x: "right",
        y: "top",
      },
      xAxis: {
        type: "category" as "category",
        boundaryGap: false,
        data: ["01-09", "01-10", "01-11", "01-12", "01-13", "01-14", "01-15"],
      },
      yAxis: {
        type: "value" as "value",
      },
      series: [
        {
          name: "温度",
          type: "line" as "line",
          data: [0.5, 0.3, 0.4, 0.6, 0.6, 0.4, 0.4],
        },
        {
          name: "湿度",
          type: "line" as "line",
          data: [0.3, 0.3, 0.4, 0.5, 0.7, 0.5, 0.6],
        },
      ],
    };
    rateChart.setOption(option);
  });
  return (
    <>
      <div ref={rateRef} style={{ width: 250, height: 250 }}></div>
    </>
  );
};

export default RateChart;
