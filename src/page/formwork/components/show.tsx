import React, { useEffect } from 'react';

import { Space, Table, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { showFormwork } from '../actions';

const { Column } = Table;

export default () => {
  let refresh = useSelector(
    (state: Formwork.ReduxState) => state.formwork.refresh
  );
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(refresh);

    if (refresh) {
      // TODO: HTTP请求formworks数据
      dispatch(showFormwork());
    }
  }, [refresh, dispatch]);

  const data = [
    {
      key: 1,
      index: 1,
      name: 'ModbusTcpProfile',
      isPrivate: '私有',
      drive: 'ModbusDriver', // 驱动
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 2,
      index: 2,
      name: 'MqttProfile',
      isPrivate: '私有',
      drive: 'MqttDriver',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 3,
      index: 3,
      name: 'OpcDaProfile',
      isPrivate: '私有',
      drive: 'OpcDaDriver',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 4,
      index: 4,
      name: 'OpcUaProfile',
      isPrivate: '私有',
      drive: 'OpcUaDriver',
      createTime: '2014-12-24 23:12:00',
    },
  ];
  return (
    <Table dataSource={data}>
      <Column title="#" dataIndex="index" key="index" />
      <Column title="模板" dataIndex="name" key="name" />
      <Column title="公/私有" dataIndex="isPrivate" key="isPrivate" />
      <Column title="所属驱动" dataIndex="drive" key="drive" />
      <Column title="创建日期" dataIndex="createTime" key="createTime" />
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
