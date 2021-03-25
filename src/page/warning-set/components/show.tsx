import React from 'react';

import { Space, Table, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Column from 'antd/lib/table/Column';
import Mock from 'mockjs';

import 'src/page/style/style.css';

export default () => {
  const { data } = Mock.mock({
    'data|100': [
      {
        'index|+1': 1,
        'method|+1': ['手机', '邮箱'],
        'content|+1': [153 + '@natural(10000000,19999999)', '@email'],
        'frequency|+1': ['@natural(10,30)' + '分钟', '@natural(1,2)' + '小时'],
        'level|+1': '@natural(1,5)' + '级',
        updateTime: '@date("yyyy-MM-dd HH:mm:ss")',
        createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      },
    ],
  });

  return (
    <Table dataSource={data} size='small' rowClassName='dc3-table-row'>
      <Column title='#' dataIndex='index' key='index' />
      <Column title='内容' dataIndex='content' key='content' />
      <Column title='频率' dataIndex='frequency' key='frequency' />
      <Column title='等级' dataIndex='level' key='level' />
      <Column title='修改日期' dataIndex='updateTime' key='updateTime' />
      <Column title='创建日期' dataIndex='createTime' key='createTime' />
      <Column
        title='操作'
        dataIndex='operation'
        key='operation'
        render={() => (
          <Space size='middle'>
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
