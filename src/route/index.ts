import { RouteConfig } from 'react-router-config';

import Home from 'src/outter-page/home';
import Login from 'src/outter-page/login';
import Capsule from 'src/page/capsule';
import Formwork from 'src/page/formwork';
import DriverConfiguration from 'src/page/driver-configuration';
import Device from 'src/page/device';
import Tagname from 'src/page/tagname';
import TagConfig from 'src/page/tag-config';
import MicroService from 'src/page/micro-service';
import Timeline from 'src/page/timeline';
import DeviceCurrentTimeData from 'src/page/device-current-time-data';
import DeviceHistoryData from 'src/page/device-history-data';
import WarningData from 'src/page/warning-data';
import WarningSet from 'src/page/warning-set';
import UserList from 'src/page/user-list';
import DevicePage from 'src/page/capsule/index';

const config: RouteConfig[] = [
  {
    path: '/home',
    component: Home,
    routes: [
      {
        path: '/home/capsule',
        component: Capsule,
        exact: true,
      },
      {
        path: '/home/formwork',
        component: Formwork,
        exact: true,
      },
      {
        path: '/home/tagname',
        component: Tagname,
        exact: true,
      },
      {
        path: '/home/tagconfig',
        component: TagConfig,
        exact: true,
      },
      {
        path: '/home/driverConfiguration',
        component: DriverConfiguration,
        exact: true,
      },

      {
        path: '/home/device',
        component: Device,
        exact: true,
      },
      {
        path: '/home/microService',
        component: MicroService,
      },
      {
        path: '/home/timeline',
        component: Timeline,
        exact: true,
      },
      {
        path: '/home/deviceCurrentTimeData',
        component: DeviceCurrentTimeData,
        exact: true,
      },
      {
        path: '/home/deviceHistoryData',
        component: DeviceHistoryData,
        exact: true,
      },
      {
        path: '/home/warningData',
        component: WarningData,
        exact: true,
      },
      {
        path: '/home/warningSet',
        component: WarningSet,
        exact: true,
      },
      {
        path: '/home/userList',
        component: UserList,
        exact: true,
      },
      {
        path: '/home/devicePage',
        component: DevicePage,
        exact: true,
      },
    ],
  },
  {
    path: '/',
    component: Login,
    exact: true,
  },
];

export default config;
