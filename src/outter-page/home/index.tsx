import React, { Suspense } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import { Layout } from 'antd';
import {
  ApiOutlined,
  BellOutlined,
  CopyOutlined,
  HomeOutlined,
  LineChartOutlined,
  UserOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import './style.css';
import 'antd/dist/antd.css';
import AntdRouterMenu from '../../components/Antd-router-menu/Antd-router-menu';
import UserHeader from './components/user-header';
import { MenuItem, MenuItemGroup } from '../../components/Menu';
import PageLoading from '../../components/page-loading';

const { Header, Content, Footer, Sider } = Layout;

/**
 * 配置导航栏链接和文字
 */
const MENU_DATA = [
  new MenuItem('/home/timeline', '首页', <HomeOutlined />),
  new MenuItemGroup(
    '设备接入',
    [
      new MenuItem('/home/formwork', '模板'),
      new MenuItem('/home/tagname', '位号'),
      new MenuItem('/home/driverConfiguration', '驱动配置'),
      new MenuItem('/home/device', '设备'),
      new MenuItem('/home/tagconfig', '位号配置'),
    ],
    <ApiOutlined />
  ),
  new MenuItemGroup(
    '告警管理',
    [
      new MenuItem('/home/warningData', '告警数据管理'),
      new MenuItem('/home/warningSet', '告警方式设置'),
    ],
    <BellOutlined />
  ),
  new MenuItemGroup(
    '设备数据管理',
    [
      new MenuItem('/home/deviceParamConfig', '采集参数设置'),
      new MenuItem('/home/deviceCurrentTimeData', '实时数据查看'),
      new MenuItem('/home/deviceHistoryData', '历史数据管理'),
    ],
    <CopyOutlined />
  ),
  new MenuItemGroup(
    '状态监控',
    [
      new MenuItem('/home/devicePage', '设备状态监控'),
      new MenuItem('/home/microService', '平台状态监控'),
    ],
    <LineChartOutlined />
  ),
  new MenuItemGroup(
    '部署方案管理',
    [new MenuItem('/home/developmentProgram', '部署方案详情')],
    <ShareAltOutlined />
  ),
  new MenuItem('/home/userList', '用户管理', <UserOutlined />),
];

export const MenuContext =
  React.createContext<(MenuItem | MenuItemGroup)[]>(MENU_DATA);

export default ({ route }: RouteConfigComponentProps) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/home/timeline');
  };
  return (
    <MenuContext.Provider value={MENU_DATA}>
      <Layout>
        <Header
          style={{
            justifyContent: 'space-between',
            display: 'flex',
          }}>
          <h1
            style={{
              fontFamily: 'fantasy',
              fontSize: '30px',
              fontWeight: 'bold',
              color: '#fafafa',
              cursor: 'pointer',
            }}
            onClick={handleClick}>
            动环监控平台
          </h1>
          <UserHeader />
        </Header>
        <Layout>
          <Sider theme='light' className='home-sider'>
            <AntdRouterMenu menuData={MENU_DATA} />
          </Sider>
          <div className='home-content-box'>
            <Suspense fallback={<PageLoading />}>
              <Content className='home-content'>
                {renderRoutes(route?.routes)}
              </Content>
            </Suspense>
            <Footer>code@Eric design@Luna</Footer>
          </div>
        </Layout>
      </Layout>
    </MenuContext.Provider>
  );
};
