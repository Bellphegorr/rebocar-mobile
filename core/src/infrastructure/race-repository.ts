import { Race } from "@/domain/race";
import { RaceRepository as IRaceRepository } from "@/domain/abstractions/race-repository";

export class RaceRepository implements IRaceRepository {
  private races: Race[] = [];

  getById(id: string) {
    return this.races.find((x) => x.getId() === id);
  }

  save(race: Race): void {
    this.races.push(race);
    console.log(this.races);
  }
}
