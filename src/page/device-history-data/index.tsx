import React, { lazy } from 'react';

const DeviceHistortData = lazy(() => import('./components/compose'));

// 整体组件逻辑,lazy等等.
export default () => <DeviceHistortData />;
