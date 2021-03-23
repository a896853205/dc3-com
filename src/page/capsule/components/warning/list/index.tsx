import React from 'react';

import { List, Typography } from 'antd';

const data = [
  '温湿度传感器1：通信状态：断线报警',
  '温湿度传感器2：湿度过低报警',
  '温湿度传感器3：温度过高报警',
  '温湿度传感器4：温度显示异常报警',
  '温湿度传感器5：湿度显示异常报警',
];

export default () => {
  return (
    <List
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>{item}</Typography.Text>
        </List.Item>
      )}
    />
  );
};
