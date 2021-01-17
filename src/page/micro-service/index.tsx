import React, { lazy } from 'react';

const MicroService = lazy(() => import('./components/compose'));

// 整体组件逻辑,lazy等等.
export default () => <MicroService />;
