import React from 'react';

import useUrlState from '@ahooksjs/use-url-state';

import Increase from './increase';
import Show from './show';

import BreadcrumbList from '../../../components/Breadcrumb/Breadcrumb';

export default () => {
  const [urlState, setUrlState] = useUrlState();

  return (
    <>
      <BreadcrumbList />
      {urlState.uuid ? (
        <Show setUrlState={setUrlState} />
      ) : (
        <Increase setUrlState={setUrlState} />
      )}
    </>
  );
};
