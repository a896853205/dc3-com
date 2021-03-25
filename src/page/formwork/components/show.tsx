import React, { useEffect } from 'react';

import { Space, Table, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Mock from 'mockjs';
import { useDispatch, useSelector } from 'react-redux';

import { showFormwork } from '../actions';

import 'src/page/style/style.css';

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

  const { data } = Mock.mock({
    'data|100': [
      {
        'index|+1': 1,
        'name|+1': [
          'ModbusTcpProfile',
          'MqttProfile',
          'OpcUaProfile',
          'OpcDaProfile',
        ],
        'isPrivate|1': ['私有', '公有'],
        'drive|+1': [
          'ModbusDriver',
          'MqttDriver',
          'OpcDaDriver',
          'OpcUaDriver',
        ],
        createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      },
    ],
  });

  console.log(data);

  return (
    <Table dataSource={data} size='small' rowClassName='dc3-table-row'>
      <Column title='#' dataIndex='index' key='index' />
      <Column title='模板' dataIndex='name' key='name' />
      <Column title='公/私有' dataIndex='isPrivate' key='isPrivate' />
      <Column title='所属驱动' dataIndex='drive' key='drive' />
      <Column title='创建日期' dataIndex='createTime' key='createTime' />
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
