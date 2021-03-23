import React from 'react';

import { Space, Table, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Column from 'antd/lib/table/Column';

export default () => {
  const data = [
    {
      key: 1,
      index: 1,
      level: '一级',
      content: '湿度过低',
      updateTime: '2021-3-21 23:00:00',
      createTime: '2021-3-21 23:00:00',
    },
    {
      key: 2,
      index: 2,
      level: '二级',
      content: '湿度显示异常',
      updateTime: '2021-3-21 23:00:00',
      createTime: '2021-3-21 23:00:00',
    },
    {
      key: 3,
      index: 3,
      level: '三级',
      content: '温度显示异常',
      updateTime: '2021-3-21 23:00:00',
      createTime: '2021-3-21 23:00:00',
    },
  ];
  return (
    <Table dataSource={data}>
      <Column title="#" dataIndex="index" key="index"></Column>
      <Column title="等级" dataIndex="level" key="level"></Column>
      <Column title="内容" dataIndex="content" key="content"></Column>
      <Column title="修改日期" dataIndex="updateTime" key="updateTime"></Column>
      <Column title="创建日期" dataIndex="createTime" key="createTime"></Column>
      <Column
        title="操作"
        dataIndex="operation"
        key="operation"
        render={() => (
          <Space size="middle">
            <Typography.Link>
              <EditOutlined />
              编辑
            </Typography.Link>
            <Typography.Link>
              <DeleteOutlined />
              删除
            </Typography.Link>
          </Space>
        )}
      ></Column>
    </Table>
  );
};
