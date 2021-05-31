import React, { lazy } from 'react';

const DevelopmentProgram = lazy(() => import('./components/compose'));

export default () => <DevelopmentProgram />;
