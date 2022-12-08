import { Race } from "../race";

export interface Broker {
  confirmRequestAccepted(race: Race): void;
  scheduleRace(race: Race): Promise<void>;
  joinUser(userId: string): void;
}
