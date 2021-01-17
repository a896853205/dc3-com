import React, { useEffect } from 'react';

import { Table, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { showTagconfig } from '../actions';

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

  const data = [
    {
      key: 1,
      index: 1,
      dev: 'ModbusTcp-Device',
      tagname: 'tag-int',
      attribute: '偏移量',
      content: '0',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 2,
      index: 2,
      dev: 'ModbusTcp-Device',
      tagname: 'tag-int',
      attribute: '从站编号',
      content: '1',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 3,
      index: 3,
      dev: 'ModbusTcp-Device',
      tagname: 'tag-int',
      attribute: '功能码',
      content: '3',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 4,
      index: 4,
      dev: 'Mqtt-Device',
      tagname: 'tag-int',
      attribute: '指令topic',
      content: 'dc3/mqtt/commad/device_1',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 5,
      index: 5,
      dev: 'Mqtt-Device',
      tagname: 'tag-int',
      attribute: '指令Qos',
      content: '0',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 6,
      index: 6,
      dev: 'OpcUa-Device',
      tagname: 'tag-string',
      attribute: '命名空间',
      content: '5',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 7,
      index: 7,
      dev: 'OpcUa-Device',
      tagname: 'tag-string',
      attribute: '位号',
      content: 'tag-string',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 8,
      index: 8,
      dev: 'OpcDa-Device',
      tagname: 'tag-string',
      attribute: '分组',
      content: 'group0',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 9,
      index: 9,
      dev: 'OpcDa-Device',
      tagname: 'tag-string',
      attribute: '位号',
      content: 'random-string',
      createTime: '2014-12-24 23:12:00',
    },
  ];
  return (
    <Table dataSource={data}>
      <Column title="#" dataIndex="index" key="index" />
      <Column title="所属设备" dataIndex="dev" key="dev" />
      <Column title="所属位号" dataIndex="tagname" key="tagname" />
      <Column title="属性" dataIndex="attribute" key="attribute" />
      <Column title="内容" dataIndex="content" key="content" />
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
