import { RouteConfig } from 'react-router-config';

import Home from 'src/outter-page/home';
import UserList from 'src/page/user-list';
import CreateUser from 'src/page/create-user';
import DriverConfiguration from 'src/page/driver-configuration';
import Device from 'src/page/device';

const config: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    routes: [
      // {
      //   path: '/',
      //   component: Home,
      //   exact: true,
      // },
      {
        path: '/userList',
        component: UserList,
        exact: true,
      },
      {
        path: '/createUser',
        component: CreateUser,
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
    ],
  },
];

export default config;
