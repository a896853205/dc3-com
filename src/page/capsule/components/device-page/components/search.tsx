import React from 'react';

import {
  Form,
  Button,
  Input,
  Select,
  Table,
  Typography,
  DatePicker,
} from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import Mock from 'mockjs';

import 'src/page/style/style.css';

const { Column } = Table;
const { RangePicker } = DatePicker;

export default ({ setUrlState }: { setUrlState: Function }) => {
  const onFinish = () => {};

  const { data } = Mock.mock({
    'data|100': [
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
        'location|+1': [
          '北京数据中心/一楼动环演示机柜',
          '北京数据中心/二楼动环演示机柜',
          '北京数据中心/三楼动环演示机柜',
          '北京数据中心/四楼动环演示机柜',
        ],
        state: '在线',
        'remarks|+1': [
          'modbus设备-温度传感器',
          'mqtt设备-湿度传感器',
          'OpcUa设备-水浸传感器',
          'OpcDa设备-空调传感器',
        ],
        updateTime: '@date("yyyy-MM-dd HH:mm:ss")',
        createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      },
    ],
  });

  console.log(data);

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 10 }}
        layout='horizontal'
        onFinish={onFinish}
      >
        <Form.Item label='设备名'>
          <Input placeholder='设备' />
        </Form.Item>
        <Form.Item label='所属产品'>
          <Select></Select>
        </Form.Item>
        <Form.Item label='所属分组'>
          <Select></Select>
        </Form.Item>
        <Form.Item label='起止时间'>
          <RangePicker showTime />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
          <Button type='primary'>搜索</Button>
        </Form.Item>
      </Form>
      <Table
        size='small'
        rowClassName='dc3-table-row'
        dataSource={data}
        onRow={record => {
          return {
            onClick: _event => {
              setUrlState({
                uuid: record.index,
              });
            },
          };
        }}
      >
        <Column title='#' dataIndex='index' key='index' />
        <Column title='设备' dataIndex='device' key='devce' />
        <Column title='所属产品' dataIndex='template' key='template' />
        <Column title='所在位置' dataIndex='location' key='location' />
        <Column title='状态' dataIndex='state' key='state' />
        <Column title='备注' dataIndex='remarks' key='remarks' />
        <Column title='采集时间' dataIndex='updateTime' key='updateTime' />
        <Column title='结束时间' dataIndex='createTime' key='createTime' />
        <Column
          title='操作'
          dataIndex='operation'
          key='operation'
          render={() => (
            <Typography.Link>
              <EyeOutlined />
              查看
            </Typography.Link>
          )}
        />
      </Table>
    </>
  );
};
