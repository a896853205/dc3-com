import React, { useCallback } from 'react';

import { Input } from 'antd';
import { useDispatch } from 'react-redux';

import { searchGroup } from '../actions';
const { Search } = Input;

export default () => {
  const dispatch = useDispatch();

  const searchGroup = useCallback(
    value => {
      dispatch(searchGroup({ searchParam: value }));
    },
    [dispatch]
  );
  return (
    <Search
      placeholder='请输入分组名称'
      onSearch={value => {
        searchGroup(value);
      }}
      style={{ width: 200 }}
    />
  );
};
