import React, { useRef, useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { Typography } from 'antd';
import moment from 'moment';
import { v1 } from 'uuid';

import './chart.css';

const { Title } = Typography;

export default () => {
  let treeRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (treeRef.current) {
      let treeChart = echarts.init(treeRef.current);
      // 获取数据
      let option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
        },
        series: [
          {
            type: 'tree',

            data: [data],

            left: '2%',
            right: '2%',
            top: '8%',
            bottom: '20%',

            symbol: 'emptyCircle',

            orient: 'vertical',

            expandAndCollapse: true,

            label: {
              position: 'top',
              rotate: -90,
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 9,
            },

            leaves: {
              label: {
                position: 'bottom',
                rotate: -90,
                verticalAlign: 'middle',
                align: 'left',
              },
            },

            animationDurationUpdate: 750,
          },
        ],
      };

      treeChart.setOption(option);
    }
  }, [data]);

  useEffect(() => {
    fetch(
      'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/flare.json'
    )
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  }, []);

  return (
    <div className='chart-box'>
      <div ref={treeRef} style={{height: 500 }}></div>
    </div>
  );
};
