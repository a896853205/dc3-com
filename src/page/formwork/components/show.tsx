import React from 'react';

import { Table } from 'antd';

const { Column } = Table;

export default () => {
  return (
    <Table>
      <Column title='#' dataIndex='index' key='index' />
      <Column title='模板' dataIndex='name' key='name' />
      <Column title='公/私有' dataIndex='isPrivate' key='isPrivate' />
      <Column title='所有驱动' dataIndex='isPrivate' key='isPrivate' />
      <Column title='创建日期' dataIndex='isPrivate' key='isPrivate' />
      <Column title='操作' dataIndex='isPrivate' key='isPrivate' />
    </Table>
  );
};
