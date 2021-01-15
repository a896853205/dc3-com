import React from 'react';

import { List, Typography } from 'antd';

const data = ['上架告警', '下架告警', '断线报警', '断线报警'];

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
