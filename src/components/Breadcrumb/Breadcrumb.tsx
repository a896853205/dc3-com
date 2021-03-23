import React, { useContext } from 'react';
import { useLocation } from 'react-router';

import { Breadcrumb, Divider } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { MenuItem, MenuItemGroup } from '../Menu';
import { MenuContext } from '../../outter-page/home';
/**
 * 通过url来渲染面包屑
 * @param menuArr 菜单数组(是原来我方便antd-router自定义的类型)
 */
const useBreadcrumbListByUrl = (
  menuArr?: (MenuItem | MenuItemGroup)[]
): string[] => {
  let location = useLocation();
  const nameList = [];

  if (menuArr) {
    for (let menuItem of menuArr) {
      if (menuItem instanceof MenuItem) {
        // item类型直接判断
        if (menuItem.url === location.pathname) {
          nameList.push(menuItem.name);
        }
      }

      if (menuItem instanceof MenuItemGroup) {
        // 遍历其中循环判断
        for (let menuSubItem of menuItem.children) {
          if (menuSubItem.url === location.pathname) {
            nameList.push(menuSubItem.name);
          }
        }
      }
    }
  }

  return nameList;
};

export default () => {
  const menu = useContext(MenuContext);

  const nameList = useBreadcrumbListByUrl(menu);

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        {nameList.map(name => (
          <Breadcrumb.Item>{name}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <Divider />
    </>
  );
};
