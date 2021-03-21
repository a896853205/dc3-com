import React, { Suspense } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import { Layout } from 'antd';

import './style.css';
import 'antd/dist/antd.css';
import AntdRouterMenu, {
  MenuItem,
  MenuItemGroup,
} from '../../components/Antd-router-menu/Antd-router-menu';
import PageLoading from '../../components/page-loading';

const { Content, Footer, Sider } = Layout;
/**
 * 配置导航栏链接和文字
 */
const MENU_DATA = [
  new MenuItem('/', '显示'),
  new MenuItem('/timeline', '首页'),
  new MenuItemGroup('设备接入', [
    new MenuItem('/formwork', '模板'),
    new MenuItem('/tagname', '位号'),
    new MenuItem('/tagconfig', '位号配置'),
    new MenuItem('/driverConfiguration', '驱动配置'),
    new MenuItem('/device', '设备'),
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
