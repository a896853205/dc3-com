import React, { useEffect } from 'react';

import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { showTagconfig } from '../actions';

const { Column } = Table;

export default () => {
  let refresh = useSelector(
    (state: Formwork.ReduxState) => state.formwork.refresh
  );
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(refresh);

    if (refresh) {
      // TODO: HTTP请求tagconfig数据
      dispatch(showTagconfig());
    }
  }, [refresh, dispatch]);

  return (
    <Table dataSource={[]}>
      <Column title='#' dataIndex='index' key='index' />
      <Column title='所属设备' dataIndex='dev' key='dev' />
      <Column title='所属位号' dataIndex='tagname' key='tagname' />
      <Column title='属性' dataIndex='attribute' key='attribute' />
      <Column title='内容' dataIndex='content' key='content' />
      <Column title='创建日期' dataIndex='createTime' key='createTime' />
      <Column title='操作' dataIndex='' key='' />
    </Table>
  );
};
