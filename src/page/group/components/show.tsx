import React, { useEffect } from 'react';

import { Tabs, Button, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Mock from 'mockjs';

import { showDevice } from '../actions';
import DeviceList from './contains/device-list';
import GroupDetail from './contains/group-detail';

import 'src/page/style/style.css';
const { Title } = Typography;
const { TabPane } = Tabs;

export default ({ setUrlState }: { setUrlState: Function }) => {
  let refresh = useSelector((state: Device.ReduxState) => state.device.refresh);
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(refresh);

    if (refresh) {
      // TODO: HTTP请求device数据
      dispatch(showDevice());
    }
  }, [refresh, dispatch]);

  const callback = () => {};
  const { data } = Mock.mock({
    'data|10': [
      {
        'index|+1': 1,
        'name|+1': [
          'ModbusTcp-group',
          'Mqtt-group',
          'OpcUa-group',
          'OpcDa-group',
        ],
        id: 'wth1qhDt1BG9kzBon8xi010200',
        createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      },
    ],
  });

  console.log(data);

  return (
    <>
      <Title>
        <Button
          shape='circle'
          style={{ marginRight: '10px' }}
          onClick={() => setUrlState({ uuid: undefined })}
        >
          <LeftOutlined />
        </Button>
        分组名: ModbusTcp-group
      </Title>
      <Tabs defaultActiveKey='1' onChange={callback}>
        <TabPane tab='分组信息' key='1'>
          <GroupDetail />
        </TabPane>
        <TabPane tab='设备列表' key='2'>
          <DeviceList />
        </TabPane>
      </Tabs>
    </>
  );
};
