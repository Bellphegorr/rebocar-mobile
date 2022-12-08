import { Broker } from "@/domain/abstractions/broker";

export class JoinUser {
  constructor(private broker: Broker) {}

  execute(userId: string) {
    this.broker.joinUser(userId);
  }
}
