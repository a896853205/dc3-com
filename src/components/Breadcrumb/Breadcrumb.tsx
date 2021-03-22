import React from 'react';
import { useLocation } from 'react-router';

import { useLocalStorageState } from 'ahooks';

import { MenuItem, MenuItemGroup } from '../Menu';
/**
 * 通过url来渲染面包屑
 * @param menuArr 菜单数组(是原来我方便antd-router自定义的类型)
 */
const useBreadcrumbListByUrl = (
  menuArr?: (MenuItem | MenuItemGroup)[]
): string[] => {
  let location = useLocation();

  console.log(location.pathname);
  if (menuArr) {
    for (let menuItem of menuArr) {
      if (menuItem instanceof MenuItem) {
        // TODO: 直接判断
      }

      if (menuItem instanceof MenuItemGroup) {
        // TODO: 遍历其中循环判断
      }
    }
  }

  return [];
};

export default () => {
  const [menu] = useLocalStorageState<(MenuItem | MenuItemGroup)[]>('menu');
  const nameList = useBreadcrumbListByUrl(menu);
  return <></>;
};
