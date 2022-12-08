import { Race } from "@/domain/race";
import { Costumer } from "@/domain/costumer";
import { CustomLocation } from "@/domain/custom-location";

describe("Race", () => {
  it("should instanciante Race", () => {
    expect(makeSut().sut).toBeInstanceOf(Race);
  });
});

function makeSut() {
  return {
    sut: new Race(
      new Costumer("costumer-id"),
      new CustomLocation(1, 1),
      new CustomLocation(0, 0)
    ),
  };
}
