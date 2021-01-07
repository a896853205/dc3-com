import React, { useEffect } from "react";

import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { showDevice } from "../actions";
import Column from "antd/lib/table/Column";

export default () => {
  let refresh = useSelector((state: Device.ReduxState) => state.device.refresh);
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(refresh);

    if (refresh) {
      // TODO: HTTP请求device数据
      dispatch(showDevice());
    }
  }, [refresh, dispatch]);

  return (
    <Table dataSource={[]}>
      <Column title="#" dataIndex="index" key="index"></Column>
      <Column title="设备" dataIndex="device" key="devce"></Column>
      <Column title="所属模板" dataIndex="template" key="template"></Column>
      <Column title="所属分组" dataIndex="group" key="group"></Column>
      <Column
        title="存储类型"
        dataIndex="storage-style"
        key="storage-style"
      ></Column>
      <Column title="状态" dataIndex="state" key="state"></Column>
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
