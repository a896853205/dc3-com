import React, { lazy } from 'react';

const WarningSet = lazy(() => import('./components/tabs'));

// 整体组件逻辑,lazy等等.
export default () => <WarningSet />;
