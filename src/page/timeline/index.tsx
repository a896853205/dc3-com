import React, { lazy } from 'react';

const Tineline = lazy(() => import('./components/timeline'));

// 整体组件逻辑,lazy等等.
export default () => <Tineline />;
