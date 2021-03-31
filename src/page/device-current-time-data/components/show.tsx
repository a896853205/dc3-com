import React, { useEffect, useState } from 'react';

import { Table, DatePicker, Space, Button, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import Mock from 'mockjs';

import 'src/page/style/style.css';

const { RangePicker } = DatePicker;
const { Title } = Typography;
const { Column } = Table;

const currentData = (delay: number, setData: Function, data: any[]) => {
  let dataItem = null;

  setTimeout(() => {
    dataItem = Mock.mock({
      'index|+1': 1,
      group: 'ModbusTcp-group',
      'state|50-100.8': 1,
      remarks: '@now',
    });

    setData([dataItem, ...data]);
  }, delay);
};

export default ({ setUrlState }: { setUrlState: Function }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    currentData(1000, setData, data);
  }, [data]);

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

      <Space direction='horizontal' size={12}>
        <RangePicker showTime /> <Button type='primary'>查询</Button>
        <Button type='primary'>实时刷新</Button>
      </Space>
      <Table
        dataSource={data}
        style={{ marginTop: 20 }}
        size='small'
        rowClassName='dc3-table-row'
      >
        <Column title='#' dataIndex='index' key='index' />
        <Column title='所属分组' dataIndex='group' key='group' />
        <Column title='原始值' dataIndex='state' key='state' />
        <Column
          title='处理值'
          dataIndex='state'
          key='state'
          render={record => record?.toFixed(2)}
        />
        <Column title='采集时间' dataIndex='remarks' key='remarks' />
        <Column title='保存日期' dataIndex='remarks' key='remarks' />
      </Table>
    </>
  );
};
