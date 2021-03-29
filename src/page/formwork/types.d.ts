declare namespace Formwork {
  /**
   * 产品类型
   */
  interface Item {
    uuid: string;
    name: string;
    isPrivate: number;
    drive: string;
    createTime: number;
    updateTime: number;
  }

  /**
   * 搜索模型参数
   */
  interface SearchParam {
    name: string;
    isPrivate: number;
    drive: string;
  }

  /**
   * redux store
   */
  interface ReduxState {
    formwork: {
      formworks: Formwork.Item[];
      refresh: boolean;
      searchParam: SearchParam;
    };
  }
}
