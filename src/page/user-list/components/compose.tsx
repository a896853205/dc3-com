import React from 'react';

import Increase from './increase';
import Search from './search';
import Show from './show';

import { Divider } from 'antd';

export default () => {
  return (
    <>
      <Search />
      <Divider />
      <Increase />
      <Show />
    </>
  );
};
