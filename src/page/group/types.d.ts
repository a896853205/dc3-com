declare namespace Group {
  /**
   * 分组类型
   */
  interface Item {
    uuid: string;
    name: string;
    id: string;
    devices: string[];
    createTime: number;
  }

  /**
   * 搜索分组参数
   */
  interface SearchParam {
    name: string;
  }

  /**
   * redux store
   */
  interface ReduxState {
    group: {
      groups: Group.Item[];
      refresh: boolean;
      searchParam: SearchParam;
    };
  }
}
