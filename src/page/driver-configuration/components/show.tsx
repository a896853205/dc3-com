import React, { useEffect } from 'react';

import { Table, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Mock, { Random } from 'mockjs';
import { useDispatch, useSelector } from 'react-redux';

import { showDriverConfig } from '../actions';

import 'src/page/style/style.css';

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

  const { data } = Mock.mock({
    'data|9': [
      {
        'index|+1': 1,
        'name|+1': ['OpcDaProfile', 'ModbusTcpProfile', 'OpcUaProfile'],
        'attribute|+1': ['主机', '用户名', '密码', 'CLSID', '路径'],
        'content|+1': [
          'localhost',
          'dc3',
          'dc3dc3',
          'F8582CF2-88FB-11D0-B850-00C0F0104305',
          '502',
          '/OPCUA/SimulationServer',
        ],
        remarks: '无',
        updateTime: Random.datetime('yyyy-MM-dd HH:mm:ss'),
        createTime: Random.datetime('yyyy-MM-dd HH:mm:ss'),
      },
    ],
  });

  console.log(data);

  return (
    <Table dataSource={data} size='small' rowClassName='dc3-table-row'>
      <Column title='#' dataIndex='index' key='index'></Column>
      <Column title='模板' dataIndex='name' key='name'></Column>
      <Column title='属性' dataIndex='attribute' key='attribute'></Column>
      <Column title='内容' dataIndex='content' key='content'></Column>
      <Column title='备注' dataIndex='remarks' key='remarks'></Column>
      <Column title='修改日期' dataIndex='updateTime' key='updateTime'></Column>
      <Column title='创建日期' dataIndex='createTime' key='createTime'></Column>
      <Column
        title='操作'
        dataIndex='createTime'
        key='createTime'
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
