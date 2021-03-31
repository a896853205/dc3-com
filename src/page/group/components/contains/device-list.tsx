/**
 * 分组信息
 */
import React, { useState } from 'react';
import { Button, Drawer, Table, Space, Typography, Tag, Checkbox } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import Column from 'antd/lib/table/Column';
import Mock from 'mockjs';

import AddDeviceToGroup from './add-device-to-group';

const { data } = Mock.mock({
  'data|100': [
    {
      'key|+1': 1,
      'name|+1': [
        'ModbusTcp-Device',
        'Mqtt-Device',
        'OpcUa-Device',
        'OpcDa-Device',
      ],
      'modal|+1': [
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
      'status|+1': ['未激活', '在线', '离线', '已禁用'],
      onlineTime: '@date("yyyy-MM-dd HH:mm:ss")',
    },
  ],
});
export default () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type='primary' onClick={showDrawer} style={{ marginBottom: 5 }}>
        添加设备到分组
      </Button>
      <Drawer
        title='添加设备到分组'
        placement='right'
        closable={false}
        onClose={onClose}
        visible={visible}
        width='750px'
      >
        <AddDeviceToGroup />
      </Drawer>
      <Table
        dataSource={data}
        size='small'
        rowClassName='dc3-table-row'
        rowSelection={{ type: 'checkbox' }}
      >
        <Column title='设备名称' dataIndex='name' key='name' />
        <Column title='设备所属产品' dataIndex='modal' key='modal' />
        <Column title='设备所在位置' dataIndex='location' key='loaction' />
        <Column
          title='状态/启用状态'
          dataIndex='status'
          key='status'
          render={(status: any) => {
            let color = 'geekblue';
            switch (status) {
              case '未激活':
                color = 'orange';
                break;
              case '在线':
                color = 'green';
                break;
              case '离线':
                color = 'gray';
                break;
              case '已禁用':
                color = 'volcano';
                break;
            }
            return (
              <Tag color={color} key={status}>
                {status.toUpperCase()}
              </Tag>
            );
          }}
        />
        <Column title='最后上线时间' dataIndex='onlineTime' key='onlineTime' />
        <Column
          title='操作'
          dataIndex=''
          key=''
          render={() => (
            <Space size='middle'>
              <Typography.Link>
                <EyeOutlined />
                查看
              </Typography.Link>
              <Typography.Link>
                <DeleteOutlined />
                删除
              </Typography.Link>
            </Space>
          )}
        />
      </Table>
      <Space>
        <Checkbox disabled={data.length > 0 ? false : true} />
        <Button type='default' disabled={data.length > 0 ? false : true}>
          从分组中删除
        </Button>
      </Space>
    </>
  );
};
