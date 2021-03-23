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
    role: '管理员' | '普通用户';
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
