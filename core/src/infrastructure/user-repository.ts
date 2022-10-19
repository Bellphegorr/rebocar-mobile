import { User } from "../domain/user";
import { UserRepository as Repository } from "../domain/user-repository";
import { Provider } from "./provider";

export class UserRepository implements Repository {
  constructor(private provider: Provider) {}

  async getUser(authorizationCode: string): Promise<User> {
    const userInfo = await this.provider.fetchUser(authorizationCode);
    return new User(userInfo?.email);
  }
}
