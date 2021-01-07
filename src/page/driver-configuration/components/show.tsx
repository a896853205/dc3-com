import React from 'react';

import { Table } from 'antd';

const { Column } = Table;

export default () => {
  return (
    <Table>
      <Column title="#" dataIndex="index" key="index"></Column>
      <Column title="模板" dataIndex="name" key="name"></Column>
      <Column title="属性" dataIndex="attribute" key="attribute"></Column>
      <Column title="内容" dataIndex="content" key="content"></Column>
      <Column title="备注" dataIndex="remarks" key="remarks"></Column>
      <Column
        title="修改日期"
        dataIndex="modified-date"
        key="modified-date"
      ></Column>
      <Column
        title="创建日期"
        dataIndex="created-date"
        key="created-date"
      ></Column>
      <Column title="操作" dataIndex="operation" key="operation"></Column>
    </Table>
  );
};
