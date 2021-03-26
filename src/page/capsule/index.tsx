import React, { lazy } from 'react';

const DevicePage = lazy(() => import('./components/device-page/index'));

// 整体组件逻辑,lazy等等.
export default () => <DevicePage />;
