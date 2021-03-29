import React, { useEffect } from 'react';

import { Table, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Mock from 'mockjs';
import { useDispatch, useSelector } from 'react-redux';

import { showTagname } from '../actions';

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
      // TODO: HTTP请求tagnames数据
      dispatch(showTagname());
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
        'tagname|+1': ['tag-int', 'tag-int', 'tag-string', 'tag-string'],
        'type|+1': ['Integer', 'Integer', 'String', 'String'],
        isWrite: '只读',
        sumTag: '不累计',
        multiple: 1,
        format: '%.3f',
        createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      },
    ],
  });

  console.log(data);

  return (
    <Table dataSource={data} size='small' rowClassName='dc3-table-row'>
      <Column title='#' dataIndex='index' key='index' />
      <Column title='所属产品' dataIndex='name' key='name' />
      <Column title='位号' dataIndex='tagname' key='tagname' />
      <Column title='类型' dataIndex='type' key='type' />
      <Column title='读/写' dataIndex='isWrite' key='isWrite' />
      <Column title='累计标识' dataIndex='sumTag' key='sumTag' />
      <Column title='倍数' dataIndex='multiple' key='multiple' />
      <Column title='格式' dataIndex='format' key='format' />
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
