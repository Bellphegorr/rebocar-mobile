import { UserRepository } from "../domain/user-repository";

export class LoginUseCase {
  constructor(private loginProvider: UserRepository) {}

  async Execute(accessToken: string) {
    return await this.loginProvider.getUser(accessToken);
  }
}
