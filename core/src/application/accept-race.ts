import { Broker } from "@/domain/abstractions/broker";
import { Driver } from "@/domain/driver";
import { RaceRepository } from "@/domain/abstractions/race-repository";

export class AcceptRace {
  constructor(private broker: Broker, private raceRepository: RaceRepository) {}

  async execute(requestId: string, driverId: string) {
    const race = this.raceRepository.getById(requestId);
    const driver = new Driver(driverId);
    race.setDriver(driver);
    race.accept();
    this.raceRepository.save(race);
    this.broker.confirmRequestAccepted(race);
  }
}
