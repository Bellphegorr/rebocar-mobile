import { Race } from "../race";

export interface RaceRepository {
  save(race: Race): void;
  getById(id: string): Race;
}
