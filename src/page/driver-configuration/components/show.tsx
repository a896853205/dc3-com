import React, { useEffect } from 'react';

import { Table, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { showDriverConfig } from '../actions';

const { Column } = Table;

export default () => {
  let refresh = useSelector(
    (state: DriverConfig.ReduxState) => state.driverConfig.refresh
  );
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(refresh);

    if (refresh) {
      // TODO: HTTP请求drive-config数据
      dispatch(showDriverConfig());
    }
  }, [refresh, dispatch]);

  const data = [
    {
      key: 1,
      index: 1,
      name: 'OpcDaProfile',
      attribute: '主机',
      content: 'localhost',
      remarks: '无',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 2,
      index: 2,
      name: 'OpcDaProfile',
      attribute: '用户名',
      content: 'dc3',
      remarks: '无',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 3,
      index: 3,
      name: 'OpcDaProfile',
      attribute: '密码',
      content: 'dc3dc3',
      remarks: '无',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 4,
      index: 4,
      name: 'OpcDaProfile',
      attribute: 'CLSID',
      content: 'F8582CF2-88FB-11D0-B850-00C0F0104305',
      remarks: '无',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 5,
      index: 5,
      name: 'ModbusTcpProfile',
      attribute: '主机',
      content: 'localhost',
      remarks: '无',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 6,
      index: 6,
      name: 'ModbusTcpProfile',
      attribute: '端口',
      content: '502',
      remarks: '无',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 7,
      index: 7,
      name: 'OpcUaProfile',
      attribute: '主机',
      content: 'localhost',
      remarks: '无',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 8,
      index: 8,
      name: 'OpcUaProfile',
      attribute: '端口',
      content: '53530',
      remarks: '无',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 9,
      index: 9,
      name: 'OpcUaProfile',
      attribute: '路径',
      content: '/OPCUA/SimulationServer',
      remarks: '无',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
  ];
  return (
    <Table dataSource={data}>
      <Column title="#" dataIndex="index" key="index"></Column>
      <Column title="模板" dataIndex="name" key="name"></Column>
      <Column title="属性" dataIndex="attribute" key="attribute"></Column>
      <Column title="内容" dataIndex="content" key="content"></Column>
      <Column title="备注" dataIndex="remarks" key="remarks"></Column>
      <Column title="修改日期" dataIndex="updateTime" key="updateTime"></Column>
      <Column title="创建日期" dataIndex="createTime" key="createTime"></Column>
      <Column
        title="操作"
        dataIndex="createTime"
        key="createTime"
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
