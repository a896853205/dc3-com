import React from 'react';

import Increase from './increase';
import Show from './show';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';

export default () => {
  return (
    <>
      <Breadcrumb />
      <Increase />
      <Show />
    </>
  );
};
