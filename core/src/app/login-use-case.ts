import { UserRepository } from "../domain/user-repository";

export class LoginUseCase {
  constructor(private loginProvider: UserRepository) {}

  Execute() {
    return this.loginProvider.getUser("userId");
  }
}
