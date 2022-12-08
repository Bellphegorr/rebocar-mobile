import { JoinUser } from "@/application/join-user";
import { Broker } from "@/domain/abstractions/broker";
import { Race } from "@/domain/race";
import { User } from "@/domain/abstractions/user";

describe("JoinUser", () => {
  it("should instanciante JoinUser", () => {
    expect(makeSut().sut).toBeInstanceOf(JoinUser);
  });

  it("should execute use case", () => {
    const sut = makeSut();
    expect(sut.sut.execute("userId"));
  });

  it("should call broker to join user", () => {
    const sut = makeSut();
    sut.sut.execute("userId");
    expect(sut.broker.joinUser).toBeCalledWith("userId");
  });

  function makeSut() {
    const broker: Broker = {
      joinUser: jest.fn(),
      scheduleRace: function (race: Race): Promise<void> {
        throw new Error("Function not implemented.");
      },
      confirmRequestAccepted: function (race: Race): void {
        throw new Error("Function not implemented.");
      },
    };
    return {
      sut: new JoinUser(broker),
      broker,
    };
  }
});
