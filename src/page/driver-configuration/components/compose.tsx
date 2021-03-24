import React from 'react';

import Increase from './increase';
import Search from './search';
import Show from './show';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';

export default () => {
  return (
    <>
      <Breadcrumb />
      <Search />
      <Increase></Increase>
      <Show />
    </>
  );
};
