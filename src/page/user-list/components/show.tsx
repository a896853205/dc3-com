import React, { useEffect } from 'react';

import { Space, Table, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { showUser } from '../actions';

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
      role: '管理员',
    },
    {
      key: 2,
      index: 2,
      name: 'Sage',
      email: '123456@qq.com',
      tel: '8888888',
      role: '普通用户',
    },
    {
      key: 3,
      index: 3,
      name: 'Sage',
      email: '123456@qq.com',
      tel: '8888888',
      role: '管理员',
    },
    {
      key: 4,
      index: 4,
      name: 'Sage',
      email: '123456@qq.com',
      tel: '8888888',
      role: '管理员',
    },
  ];
  return (
    <Table dataSource={data}>
      <Column title="#" dataIndex="index" key="index" />
      <Column title="用户名" dataIndex="name" key="name" />
      <Column title="邮箱" dataIndex="email" key="email" />
      <Column title="电话" dataIndex="tel" key="tel" />
      <Column title="权限" dataIndex="role" key="role" />
      <Column
        title="操作"
        dataIndex=""
        key=""
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
      />
    </Table>
  );
};
