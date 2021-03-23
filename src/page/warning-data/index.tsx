import React, { lazy } from 'react';

const WarningData = lazy(() => import('../warning-data/components/tabs/index'));

// 整体组件逻辑,lazy等等.
export default () => <WarningData />;
