declare namespace Formwork {
  /**
   * 模板类型
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
   * redux store
   */
  interface ReduxState {
    formworks: Formwork.Item[];
  }
}
