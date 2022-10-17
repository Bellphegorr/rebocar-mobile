import { User } from "./user";

export interface UserRepository {
  getUser(): User;
}
