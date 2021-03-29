import React from 'react';
import { Table } from 'antd';
import Column from 'antd/lib/table/Column';

export default () => {
  const data = [
    {
      key: '1',
      type: '属性',
      name: '温度',
      id: 'CurrentTemperature',
      dataType: 'DOUBLE',
      tag: '可选',
    },
    {
      key: '2',
      type: '属性',
      name: '温度',
      id: 'CurrentHumidity',
      dataType: 'DOUBLE',
      tag: '必选',
    },
  ];
  return (
    <Table dataSource={data}>
      <Column title='功能类型' dataIndex='type' key='type' />
      <Column title='功能名称' dataIndex='name' key='name' />
      <Column title='标识符' dataIndex='id' key='id' />
      <Column title='数据类型' dataIndex='dataType' key='dataType' />
    </Table>
  );
};
