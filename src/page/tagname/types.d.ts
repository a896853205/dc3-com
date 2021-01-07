declare namespace Tagname {
  /**
   * 位号类型
   */
  interface Item {
    uuid: string;
    name: string;
    tagname: string;
    type: string;
    isWrite: number;
    sumTag: number;
    baseNumber: number;
    multiple: number;
    format: string;
    minNumber: number;
    maxNumber: number;
    unit: string;
    createTime: number;
    updateTime: number;
  }

  /**
   * 搜索位号参数
   */
  interface SearchParam {
    name: string;
    tagname: string;
    type: string;
    isWrite: number;
    sumTag: number;
  }

  /**
   * redux store
   */
  interface ReduxState {
    tagname: {
      tagnames: Tagname.Item[];
      refresh: boolean;
      searchParam: SearchParam;
    };
  }
}
