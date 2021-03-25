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
        'level|+1': ['1级', '2级', '3级', '4级', '5级'],
        'content|+1': [
          '湿度过低',
          '湿度显示异常',
          '温度显示异常',
          '温度过高',
          '温度远超正常值',
        ],
        updateTime: '@date("yyyy-MM-dd HH:mm:ss")',
        createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      },
    ],
  });

  console.log(data);

  return (
    <Table dataSource={data} size='small' rowClassName='dc3-table-row'>
      <Column title='#' dataIndex='index' key='index' />
      <Column title='等级' dataIndex='level' key='level' />
      <Column title='内容' dataIndex='content' key='content' />
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
