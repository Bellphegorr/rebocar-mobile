import { UserRepository } from "../domain/user-repository";

export class LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  async Execute(accessToken: string) {
    return await this.userRepository.getUser(accessToken);
  }
}
