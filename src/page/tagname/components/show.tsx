import React, { useEffect } from 'react';

import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { showTagname } from '../actions';

const { Column } = Table;

export default () => {
  let refresh = useSelector(
    (state: Formwork.ReduxState) => state.formwork.refresh
  );
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(refresh);

    if (refresh) {
      // TODO: HTTP请求tagnames数据
      dispatch(showTagname());
    }
  }, [refresh, dispatch]);

  return (
    <Table dataSource={[]}>
      <Column title='#' dataIndex='index' key='index' />
      <Column title='所属模板' dataIndex='name' key='name' />
      <Column title='位号' dataIndex='tagname' key='tagname' />
      <Column title='类型' dataIndex='type' key='type' />
      <Column title='读/写' dataIndex='isWrite' key='isWrite' />
      <Column title='创建日期' dataIndex='createTime' key='createTime' />
      <Column title='操作' dataIndex='' key='' />
    </Table>
  );
};
