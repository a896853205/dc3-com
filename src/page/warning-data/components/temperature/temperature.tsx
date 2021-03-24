import React from 'react';
import Pie from '../pie-chart';
import Bar from '../bar-chart';
import Table from '../table';

import './style.css';
export default () => {
  return (
    <>
      <div className='outer-box'>
        <div className='inner-box1'>
          <Pie />
        </div>
        <div className='inner-box2'>
          <Bar />
        </div>
      </div>
      <div className='inner-box3'>
        <Table />
      </div>
    </>
  );
};
