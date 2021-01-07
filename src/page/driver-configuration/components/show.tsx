import React, { useEffect } from "react";

import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { showDriverConfig } from "../actions";

const { Column } = Table;

export default () => {
  let refresh = useSelector(
    (state: DriverConfig.ReduxState) => state.driverConfig.refresh
  );
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(refresh);

    if (refresh) {
      // TODO: HTTP请求drive-config数据
      dispatch(showDriverConfig());
    }
  }, [refresh, dispatch]);

  return (
    <Table dataSource={[]}>
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
