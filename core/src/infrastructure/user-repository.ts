import { Costumer } from "@/domain/costumer";
import { CustomLocation } from "@/domain/custom-location";
import { UserRepository as IUserRepository } from "@/domain/abstractions/user-repository";

export class UserRepository implements IUserRepository {
  getById(userId: string): Costumer {
    return new Costumer(userId);
  }

  getLocation(lat: number, long: number): CustomLocation {
    return new CustomLocation(lat, long);
  }
}
