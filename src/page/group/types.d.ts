declare namespace Device {
  /**
   * 设备类型
   */
  interface Item {
    uuid: string;
    device: string;
    dev: string;
    group: string;
    storeType: string;
    createTime: number;
    updateTime: number;
  }

  /**
   * 搜索设备参数
   */
  interface SearchParam {
    device: string;
    dev: string;
    group: string;
  }

  /**
   * redux store
   */
  interface ReduxState {
    device: {
      devices: Device.Item[];
      refresh: boolean;
      searchParam: SearchParam;
    };
  }
}
