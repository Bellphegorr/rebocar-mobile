import { Broker } from "@/domain/abstractions/broker";
import { Costumer } from "@/domain/costumer";
import { CustomLocation } from "@/domain/custom-location";
import { Race } from "@/domain/race";
import { RaceRepository } from "@/domain/abstractions/race-repository";
import { UserRepository } from "@/domain/abstractions/user-repository";

export class RequestRace {
  constructor(
    private readonly userRepository: UserRepository,
    private broker: Broker,
    private raceRepository: RaceRepository
  ) {}

  async execute(
    userId: string,
    origin: CustomLocation,
    destination: CustomLocation
  ) {
    const user: Costumer = this.userRepository.getById(userId) as Costumer;
    const from = this.userRepository.getLocation(
      origin.getLatitude(),
      origin.getLongitude()
    );
    const to = this.userRepository.getLocation(
      destination.getLatitude(),
      destination.getLongitude()
    );
    const race = new Race(user, from, to);
    this.raceRepository.save(race);
    await this.broker.scheduleRace(race);
  }
}
