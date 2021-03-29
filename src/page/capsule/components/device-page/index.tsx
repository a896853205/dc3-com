import React from 'react';

import useUrlState from '@ahooksjs/use-url-state';

import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import Search from './components/search';
import Show from './components/show';

export default () => {
  const [urlState, setUrlState] = useUrlState();


  return (
    <>
      <Breadcrumb />
      {urlState.uuid ? (
        <Show setUrlState={setUrlState} />
      ) : (
        <Search setUrlState={setUrlState} />
      )}
    </>
  );
};
