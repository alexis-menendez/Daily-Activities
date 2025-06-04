export default class AccountManager {

  private userList: string[] = [];

  addAccount(username: string) : boolean {
    if (this.userList.includes(username)) {
      return false;
    }

    this.userList.push(username);
    return true;
  }

  removeAccount(username: string) : boolean {
    const index = this.userList.indexOf(username);
    if (index === -1) {
      return false;
    }

    this.userList.splice(index, 1);
    return true;
  }
}
