import React, { useEffect } from 'react';

import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { showFormwork } from '../actions';

const { Column } = Table;

export default () => {
  let refresh = useSelector(
    (state: Formwork.ReduxState) => state.formwork.refresh
  );
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(refresh);

    if (refresh) {
      // TODO: HTTP请求formworks数据
      dispatch(showFormwork());
    }
  }, [refresh, dispatch]);

  return (
    <Table dataSource={[]}>
      <Column title='#' dataIndex='index' key='index' />
      <Column title='模板' dataIndex='name' key='name' />
      <Column title='公/私有' dataIndex='isPrivate' key='isPrivate' />
      <Column title='所有驱动' dataIndex='drive' key='drive' />
      <Column title='创建日期' dataIndex='createTime' key='createTime' />
      <Column title='操作' dataIndex='' key='' />
    </Table>
  );
};
