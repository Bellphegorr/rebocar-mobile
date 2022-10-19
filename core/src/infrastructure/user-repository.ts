import { User } from "../domain/user";
import { UserRepository as Repository } from "../domain/user-repository";

export interface UserProviderResponse {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;
  sub: string;
}

export interface Provider {
  fetchUser: (id: string) => Promise<UserProviderResponse>;
}

export class UserRepository implements Repository {
  constructor(private provider: Provider) {}

  async getUser(authorizationCode: string): Promise<User> {
    const userInfo = await this.provider.fetchUser(authorizationCode);
    return new User(userInfo?.email);
  }
}
