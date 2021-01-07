import React from 'react';

import { Table } from 'antd';
import { useSelector } from 'react-redux';

const { Column } = Table;

export default () => {
  let formworks = useSelector((state: Formwork.ReduxState) => state.formworks);

  return (
    <Table dataSource={formworks}>
      <Column title='#' dataIndex='index' key='index' />
      <Column title='模板' dataIndex='name' key='name' />
      <Column title='公/私有' dataIndex='isPrivate' key='isPrivate' />
      <Column title='所有驱动' dataIndex='drive' key='drive' />
      <Column title='创建日期' dataIndex='createTime' key='createTime' />
      <Column title='操作' dataIndex='' key='' />
    </Table>
  );
};
