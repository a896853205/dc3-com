import React, { Suspense } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import { Layout } from 'antd';

import './style.css';
import 'antd/dist/antd.css';
import AntdRouterMenu, {
  MenuItemGroup,
  MenuItem
} from '../../components/Antd-router-menu/Antd-router-menu';
import PageLoading from '../../components/page-loading';

const { Content, Footer, Sider } = Layout;
/**
 * 配置导航栏链接和文字
 */
const MENU_DATA = [
  new MenuItem('/', '首页'),
  new MenuItem('/formwork', '模板'),
  new MenuItemGroup('user-list', [
    {
      url: '/userList',
      name: '用户列表',
    },
  ]),
  new MenuItemGroup('create-user', [
    {
      url: '/createUser',
      name: '创建用户',
    },
  ]),
  new MenuItemGroup('driver-configuration', [
    {
      url: '/driverConfiguration',
      name: '驱动配置',
    },
  ]),
  new MenuItemGroup('device', [
    {
      url: '/device',
      name: '设备',
    },
  ]),
];

export default ({ route }: RouteConfigComponentProps) => {
  return (
    <Layout>
      <Sider theme="light" className="home-sider">
        <AntdRouterMenu menuData={MENU_DATA} />
      </Sider>
      <div className="home-content-box">
        <Suspense fallback={<PageLoading />}>
          <Content className="home-content">
            {renderRoutes(route?.routes)}
          </Content>
        </Suspense>
        <Footer>code@Eric design@Luna</Footer>
      </div>
    </Layout>
  );
};
