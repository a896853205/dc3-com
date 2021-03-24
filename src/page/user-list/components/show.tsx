import React, { useEffect } from 'react';

import { Space, Table, Typography, Tag, Row } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { showUser } from '../actions';

import 'src/page/style/style.css';

const { Column } = Table;

export default () => {
  let refresh = useSelector((state: User.ReduxState) => state.user.refresh);

  let dispatch = useDispatch();

  useEffect(() => {
    console.log(refresh);

    if (refresh) {
      // TODO: HTTP请求userlist数据
      dispatch(showUser());
    }
  }, [refresh, dispatch]);

  const data = [
    {
      key: 1,
      index: 1,
      name: 'Sage',
      email: '123456@qq.com',
      tel: '8888888',
      tags: ['设备接入', '设备数据管理', '状态监控'],
    },
    {
      key: 2,
      index: 2,
      name: 'Sage',
      email: '123456@qq.com',
      tel: '8888888',
      tags: ['设备接入', '告警管理', '用户管理'],
    },
    {
      key: 3,
      index: 3,
      name: 'Sage',
      email: '123456@qq.com',
      tel: '8888888',
      tags: ['设备接入', '状态监控'],
    },
    {
      key: 4,
      index: 4,
      name: 'Sage',
      email: '123456@qq.com',
      tel: '8888888',
      tags: ['设备接入'],
    },
  ];
  return (
    <Table dataSource={data} size='small' rowClassName='dc3-table-row'>
      <Column title='#' dataIndex='index' key='index' />
      <Column title='用户名' dataIndex='name' key='name' />
      <Column title='邮箱' dataIndex='email' key='email' />
      <Column title='电话' dataIndex='tel' key='tel' />
      <Column
        title='可查看模块'
        dataIndex='tags'
        key='tags'
        render={tags => (
          <>
            {tags.map((tag: any) => {
              let color;
              switch (tag) {
                case '首页展示':
                  color = 'blue';
                  break;
                case '设备接入':
                  color = 'green';
                  break;
                case '设备数据管理':
                  color = 'geekblue';
                  break;
                case '状态监控':
                  color = 'orange';
                  break;
                case '告警管理':
                  color = 'volcano';
                  break;
                case '用户管理':
                  color = 'purple';
                  break;
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        )}
      />
      <Column
        title='操作'
        dataIndex=''
        key=''
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
      />
    </Table>
  );
};
