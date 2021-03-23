import React from 'react';

import { Table, DatePicker, Space, Button, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { Title } = Typography;
const { Column } = Table;

export default ({ setUrlState }: { setUrlState: Function }) => {
  return (
    <>
      <Title>
        <Button
          shape='circle'
          style={{ marginRight: '10px' }}
          onClick={() => setUrlState({ uuid: undefined })}>
          <LeftOutlined />
        </Button>
        所属设备: xxxx
      </Title>

      <Space direction='horizontal' size={12}>
        <RangePicker showTime /> <Button type='primary'>查询</Button>
        <Button type='primary'>实时刷新</Button>
      </Space>
      <Table style={{ marginTop: 20 }}>
        <Column title='#' dataIndex='index' key='index' />
        <Column title='所属设备' dataIndex='device' key='devce' />
        <Column title='所属位号' dataIndex='template' key='template' />
        <Column title='原始值' dataIndex='storageStyle' key='storageStyle' />
        <Column title='处理值' dataIndex='state' key='state' />
        <Column title='采集时间' dataIndex='remarks' key='remarks' />
        <Column title='保存日期' dataIndex='remarks' key='remarks' />
      </Table>
    </>
  );
};
