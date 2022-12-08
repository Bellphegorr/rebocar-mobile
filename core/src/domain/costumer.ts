import { User } from "./abstractions/user";
import { CustomLocation } from "./custom-location";

export class Costumer extends User {
  private expectLocation!: CustomLocation;
  private location!: CustomLocation;
  private status: string = "idle";

  public override cancelRace(): void {
    console.log("Costumer.CancelRace() called");
  }

  public getExpectLocation(): CustomLocation {
    return this.expectLocation;
  }

  public getLocation(): CustomLocation {
    return this.location;
  }

  public getStatus(): string {
    return this.status;
  }

  public requestRace(from: CustomLocation, to: CustomLocation): void {
    this.status = "requested";
    this.location = from;
    this.expectLocation = to;
  }
}
