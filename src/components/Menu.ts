/**
 * @class 单独的导航栏
 */
export class MenuItem {
  url = '';
  name = '';
  icon? = '';

  constructor(url: string, name: string, icon: string = '') {
    this.url = url;
    this.name = name;
    this.icon = icon;
  }
}

/**
 * @class 组导航栏带有标题
 */
export class MenuItemGroup {
  title: string = '';
  children: MenuItem[] = [];

  constructor(title: string, children: MenuItem[]) {
    this.title = title;
    this.children = children.map(
      child => new MenuItem(child.url, child.name, child.icon)
    );
  }
}
