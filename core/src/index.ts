import { LoginUseCase } from "./app/login-use-case";
import { UserRepository } from "./infrastructure/user-repository";
import { Provider } from "./drivers/provider";

export function makeLoginUseCase() {
  const userRepository = new UserRepository(new Provider());
  return new LoginUseCase(userRepository);
}
