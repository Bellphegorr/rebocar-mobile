import { Costumer } from "./costumer";
import { CustomLocation } from "./custom-location";
import { Driver } from "./driver";

export class Race {
  private driver?: Driver;
  private readonly id: string;
  private status: "pending" | "accepted" | "rejected" = "pending";

  constructor(
    private readonly costumer: Costumer,
    private readonly origin: CustomLocation,
    private readonly destination: CustomLocation
  ) {
    //TODO: generate id with uuid
    this.id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  private getDestination(): CustomLocation {
    return this.destination;
  }

  private getDriver(): Driver | undefined {
    return this.driver;
  }

  private getOrigin(): CustomLocation {
    return this.origin;
  }

  private getStatus(): "pending" | "accepted" | "rejected" {
    return this.status;
  }

  accept() {
    this.status = "accepted";
  }

  getCostumer(): Costumer {
    return this.costumer;
  }

  getId(): string {
    return this.id;
  }

  setDriver(driver: Driver) {
    this.driver = driver;
  }
}
