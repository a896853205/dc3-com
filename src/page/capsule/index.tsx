import React, { lazy } from 'react';

const Capsule = lazy(() => import('./components/outter/index'));

// 整体组件逻辑,lazy等等.
export default () => <Capsule />;
