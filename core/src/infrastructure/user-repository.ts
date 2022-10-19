import { User } from "../domain/user";
import { UserRepository as Repository } from "../domain/user-repository";

export class UserRepository implements Repository {
  async getUser(userId: string): Promise<User> {
    console.log("UserRepository.GetUser");
    return new User("username");
  }
}
