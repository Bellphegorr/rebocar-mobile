import { UserRepository } from "../domain/user-repository";

export class LoginUseCase {
  constructor(private loginProvider: UserRepository) {}

  async Execute() {
    return await this.loginProvider.getUser("userId");
  }
}
