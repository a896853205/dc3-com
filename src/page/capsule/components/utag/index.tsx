/**
 * U位使用率
 */
import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";

const UTagChart = () => {
  let uRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let utagChart = echarts.init(uRef.current as HTMLDivElement);
    let option = {
      title: {
        text: "U位使用率",
        textStyle: {
          fontSize: 12,
        },
      },
      tooltip: {
        trigger: "item" as "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      series: [
        {
          name: "温度",
          type: "pie" as "pie",
          radius: ["30%", "50%"],
          center: ["25%", "50%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center" as "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold" as "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 2, name: "温度" },
            { value: 98, name: "正常" },
          ],
        },
        {
          name: "湿度",
          type: "pie" as "pie",
          radius: ["30%", "50%"],
          center: ["70%", "50%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center" as "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold" as "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 56,
              name: "湿度",
            },
            {
              value: 100,
              name: "正常",
            },
          ],
        },
      ],
    };
    utagChart.setOption(option);
  });

  return (
    <>
      <div ref={uRef} style={{ width: 250, height: 200 }}></div>
    </>
  );
};

export default UTagChart;
