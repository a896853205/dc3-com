declare namespace User {
  /**
   * 用户类型
   */
  interface Item {
    uuid: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    tags: [];
  }

  /**
   * redux store
   */
  interface ReduxState {
    user: {
      userList: User.Item[];
      refresh: boolean;
    };
  }
}
