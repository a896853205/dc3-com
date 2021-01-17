import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

import BarChart from './bar-chart';
import Description from './description';

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
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="rook-ceph-mon-a-7b4d67ff88"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width="750px"
      >
        <div>
          <BarChart />
        </div>
        <div>
          <Description />
        </div>
      </Drawer>
    </>
  );
};
