import React, { useEffect } from 'react';

import { Space, Table, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { showDevice } from '../actions';
import Column from 'antd/lib/table/Column';

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

  const data = [
    {
      key: 1,
      index: 1,
      device: 'ModbusTcp-Device',
      template: 'ModbusTcpProfile',
      storageStyle: '单点数据',
      state: '在线',
      remarks: 'modbus设备-温度传感器',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 2,
      index: 2,
      device: 'Mqtt-Device',
      template: 'MqttProfile',
      storageStyle: '单点数据',
      state: '在线',
      remarks: 'mqtt设备-湿度传感器',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 3,
      index: 3,
      device: 'OpcUa-Device',
      template: 'OpcUaProfile',
      storageStyle: '结构数据',
      state: '在线',
      remarks: 'OpcUa设备-水浸传感器',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
    {
      key: 4,
      index: 4,
      device: 'OpcDa-Device',
      template: 'OpcDaProfile',
      storageStyle: '单点数据',
      state: '在线',
      remarks: 'OpcDa设备-空调传感器',
      updateTime: '2014-12-25 23:00:00',
      createTime: '2014-12-24 23:12:00',
    },
  ];
  return (
    <Table dataSource={data}>
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
