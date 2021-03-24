import React from 'react';

import useUrlState from '@ahooksjs/use-url-state';

import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import Search from './search';
import Show from './show';

export default () => {
  const [urlState, setUrlState] = useUrlState();

  console.log(urlState);

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
