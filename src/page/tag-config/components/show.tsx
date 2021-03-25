import React, { useEffect } from 'react';

import { Table, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Mock, { Random } from 'mockjs';
import { useDispatch, useSelector } from 'react-redux';

import { showTagconfig } from '../actions';

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
      // TODO: HTTP请求tagconfig数据
      dispatch(showTagconfig());
    }
  }, [refresh, dispatch]);

  const { data } = Mock.mock({
    'data|10': [
      {
        'index|+1': 1,
        'dev|+1': [
          'ModbusTcp-Device',
          'ModbusTcp-Device',
          'ModbusTcp-Device',
          'Mqtt-Device',
          'Mqtt-Device',
          'OpcUa-Device',
          'OpcUa-Device',
          'OpcDa-Device',
          'OpcDa-Device',
        ],
        'tagname|+1': ['tag-int', 'tag-string'],
        'storageStyle|1': ['单点数据', '结构数据'],
        state: '在线',
        'attribute|+1': [
          '偏移量',
          '从站编号',
          '功能码',
          '指令topic',
          '指令Qos',
          '命名空间',
          '位号',
          '分组',
          '位号',
        ],
        'content|+1': ['无'],
        createTime: Random.datetime('yyyy-MM-dd HH:mm:ss'),
      },
    ],
  });

  console.log(data);

  return (
    <Table dataSource={data} size='small' rowClassName='dc3-table-row'>
      <Column title='#' dataIndex='index' key='index' />
      <Column title='所属设备' dataIndex='dev' key='dev' />
      <Column title='所属位号' dataIndex='tagname' key='tagname' />
      <Column title='属性' dataIndex='attribute' key='attribute' />
      <Column title='内容' dataIndex='content' key='content' />
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
