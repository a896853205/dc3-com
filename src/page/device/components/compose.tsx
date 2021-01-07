import React from 'react';

import Batch from './batch-import';
import Increase from './increase';
import Search from './search';
import Show from './show';

export default () => {
  return (
    <>
      <Search />
      <Increase />
      <Batch />
      <Show />
    </>
  );
};
