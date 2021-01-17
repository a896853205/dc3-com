import { RouteConfig } from 'react-router-config';

import Home from 'src/outter-page/home';
import Capsule from 'src/page/capsule';
import Formwork from 'src/page/formwork';
import DriverConfiguration from 'src/page/driver-configuration';
import Device from 'src/page/device';
import Tagname from 'src/page/tagname';
import TagConfig from 'src/page/tag-config';
import MicroService from 'src/page/micro-service';

const config: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        component: Capsule,
        exact: true,
      },
      {
        path: '/formwork',
        component: Formwork,
        exact: true,
      },
      {
        path: '/tagname',
        component: Tagname,
        exact: true,
      },
      {
        path: '/tagconfig',
        component: TagConfig,
        exact: true,
      },
      {
        path: '/driverConfiguration',
        component: DriverConfiguration,
        exact: true,
      },
      {
        path: '/device',
        component: Device,
        exact: true,
      },
      {
        path: '/microService',
        component: MicroService,
        exact: true,
      },
    ],
  },
];

export default config;
