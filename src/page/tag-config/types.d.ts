declare namespace TagConfig {
  /**
   * 位号配置类型
   */
  interface Item {
    uuid: string;
    dev: string;
    tagname: string;
    attribute: string;
    content: string;
    createTime: number;
    updateTime: number;
  }

  /**
   * 搜索位号配置参数
   */
  interface SearchParam {
    dev: string;
    tagname: string;
    attribute: string;
  }

  /**
   * redux store
   */
  interface ReduxState {
    tagConfig: {
      tagConfigs: TagConfig.Item[];
      refresh: boolean;
      searchParam: SearchParam;
    };
  }
}
