import { User } from "./user";

export interface UserRepository {
  GetUser(): User;
}
