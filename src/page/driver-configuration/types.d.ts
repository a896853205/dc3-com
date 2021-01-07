declare namespace DriverConfig {
  /**
   * 驱动设置类型
   */
  interface Item {
    uuid: string;
    dev: string;
    attribute: string;
    content: string;
    createTime: number;
    updateTime: number;
  }

  /**
   * 搜索驱动设置参数
   */
  interface SearchParam {
    dev: string;
    attribute: string;
  }

  /**
   * redux store
   */
  interface ReduxState {
    driverConfig: {
      driverConfigs: DriverConfig.Item[];
      refresh: boolean;
      searchParam: SearchParam;
    };
  }
}
