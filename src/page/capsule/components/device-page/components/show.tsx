import React from 'react';

import { Button, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import Outter from 'src/page/capsule/components/outter';

import 'src/page/style/style.css';

const { Title } = Typography;

export default ({ setUrlState }: { setUrlState: Function }) => {
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
        设备名: ModbusTcp-Device
      </Title>
      <Outter />
    </>
  );
};
