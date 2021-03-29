import React from 'react';
import useUrlState from '@ahooksjs/use-url-state';

import Search from './search';
import Show from './show';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';

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
