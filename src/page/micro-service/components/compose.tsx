import React from 'react';

import Show from './show';
import Drawer from './drawer';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';

export default () => {
  return (
    <>
      <Breadcrumb />
      <Drawer />
      <Show />
    </>
  );
};
