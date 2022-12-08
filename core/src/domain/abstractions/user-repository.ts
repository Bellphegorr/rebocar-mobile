import { User } from "./user";
import { CustomLocation } from "@/domain/custom-location";

export interface UserRepository {
  getById(userId: string): User;
  getLocation(lat: number, long: number): CustomLocation;
}
