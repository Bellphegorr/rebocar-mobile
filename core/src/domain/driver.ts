import { User } from "./abstractions/user";

export class Driver extends User {
  public cancelRace(): void {
    throw new Error("Method not implemented.");
  }
}
