import { AcceptRace } from "@/application/accept-race";
import { Broker } from "@/domain/abstractions/broker";
import { Race } from "@/domain/race";
describe("AcceptRace", () => {
  it("should instanciante AcceptRace", () => {
    expect(makeSut().sut).toBeInstanceOf(AcceptRace);
  });
});

function makeSut() {
  const broker: Broker = {
    confirmRequestAccepted: jest.fn(),
    scheduleRace: jest.fn(),
    joinUser: jest.fn(),
  };
  const raceRepository = {
    save: jest.fn(),
    getById: jest.fn(),
  };
  return {
    sut: new AcceptRace(broker, raceRepository),
  };
}
