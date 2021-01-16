/**
 * 能耗监控
 */
import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";

const EnergyChart = () => {
  let energyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let energyChart = echarts.init(energyRef.current as HTMLDivElement);
    let option = {
      title: {
        text: "能耗监控/mWh",
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
          data: [0.1, 0.5, 0.4, 0.6, 0.2, 0.4, 0.5],
        },
        {
          name: "湿度",
          type: "line" as "line",
          data: [0.2, 0.3, 0.4, 0.5, 0.3, 0.5, 0.4],
        },
      ],
    };
    energyChart.setOption(option);
  });
  return (
    <>
      <div ref={energyRef} style={{ width: 250, height: 250 }}></div>
    </>
  );
};

export default EnergyChart;
