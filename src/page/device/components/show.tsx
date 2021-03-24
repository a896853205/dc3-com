import React, { useEffect } from 'react';

import { Space, Table, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Mock, { Random } from 'mockjs';

import { showDevice } from '../actions';
import Column from 'antd/lib/table/Column';

import 'src/page/style/style.css';

export default () => {
  let refresh = useSelector((state: Device.ReduxState) => state.device.refresh);
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(refresh);

    if (refresh) {
      // TODO: HTTP请求device数据
      dispatch(showDevice());
    }
  }, [refresh, dispatch]);

  const { data } = Mock.mock({
    'data|4': [
      {
        'index|+1': 1,
        'device|+1': [
          'ModbusTcp-Device',
          'Mqtt-Device',
          'OpcUa-Device',
          'OpcDa-Device',
        ],
        'template|+1': [
          'ModbusTcpProfile',
          'MqttProfile',
          'OpcUaProfile',
          'OpcDaProfile',
        ],
        'storageStyle|1': ['单点数据', '结构数据'],
        state: '在线',
        'remarks|+1': [
          'modbus设备-温度传感器',
          'mqtt设备-湿度传感器',
          'OpcUa设备-水浸传感器',
          'OpcDa设备-空调传感器',
        ],
        updateTime: Random.datetime('yyyy-MM-dd HH:mm:ss'),
        createTime: Random.datetime('yyyy-MM-dd HH:mm:ss'),
      },
    ],
  });

  console.log(data);

  return (
    <Table dataSource={data} size='small' rowClassName='dc3-table-row'>
      <Column title='#' dataIndex='index' key='index' />
      <Column title='设备' dataIndex='device' key='devce' />
      <Column title='所属模板' dataIndex='template' key='template' />
      <Column title='存储类型' dataIndex='storageStyle' key='storageStyle' />
      <Column title='状态' dataIndex='state' key='state' />
      <Column title='备注' dataIndex='remarks' key='remarks' />
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
      />
    </Table>
  );
};
