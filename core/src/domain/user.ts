export class User {
  public username: string;

  constructor(username: string) {
    this.username = username;
  }

  public getUserName() {
    return this.username;
  }
}
