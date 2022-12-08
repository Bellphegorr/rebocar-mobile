import { RaceRepository } from "@/infrastructure/race-repository";

describe("RaceRepository", () => {
  it("should instanciante RaceRepository", () => {
    expect(makeSut().sut).toBeInstanceOf(RaceRepository);
  });
});

function makeSut() {
  return {
    sut: new RaceRepository(),
  };
}
