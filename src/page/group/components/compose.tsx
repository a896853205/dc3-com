import React from 'react';

import Increase from './increase';
import Search from './search';
import Show from './show';

import BreadcrumbList from '../../../components/Breadcrumb/Breadcrumb';

export default () => {
  return (
    <>
      <BreadcrumbList />
      <Search />
      <Increase />
      <Show />
    </>
  );
};
