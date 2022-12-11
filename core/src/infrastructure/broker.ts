import { Costumer } from "@/domain/costumer";
import { Broker as IBroker } from "@/domain/abstractions/broker";
import { Socket } from "socket.io";
import { Race } from "@/domain/race";

export class Broker implements IBroker {
  constructor(private socket: Socket) {}
  confirmRequestAccepted(race: Race): void {
    this.socket.broadcast
      .to("drivers")
      .emit("request-accepted", "request already accepted");
    this.socket.to(race.getCostumer().getId()).emit("request-accepted", race);
  }

  joinUser(userId: string): void {
    this.socket.join(userId);
  }

  async scheduleRace(race: Race): Promise<void> {
    var drivers = await this.socket.in("drivers").fetchSockets();
    if (drivers.length === 0) {
      throw new Error("No drivers available");
    }
    this.socket.to("drivers").emit("requested-race", race);
  }
}
