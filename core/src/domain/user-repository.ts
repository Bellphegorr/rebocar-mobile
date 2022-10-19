import { User } from "./user";

export interface UserRepository {
  getUser(userId: string): Promise<User>;
}
