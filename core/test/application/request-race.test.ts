import { RequestRace } from "@/application/request-race";
import { Broker } from "@/domain/abstractions/broker";
import { Costumer } from "@/domain/costumer";
import { CustomLocation } from "@/domain/custom-location";
import { Race } from "@/domain/race";
import { RaceRepository } from "@/domain/abstractions/race-repository";
import { UserRepository } from "@/domain/abstractions/user-repository";

describe("request-race", () => {
  it("should instanciante RequestRace", () => {
    expect(makeSut().sut).toBeInstanceOf(RequestRace);
  });

  it("execute RequestRace with correctly parameters", () => {
    const { sut } = makeSut();
    sut.execute = jest.fn();
    sut.execute("userId", new CustomLocation(1, 1), new CustomLocation(0, 0));
    expect(sut.execute).toBeCalledWith(
      "userId",
      new CustomLocation(1, 1),
      new CustomLocation(0, 0)
    );
  });

  it("call user repository to get costumer by id", () => {
    const { sut, mockedUserRepository } = makeSut();
    sut.execute("userId", new CustomLocation(1, 1), new CustomLocation(0, 0));
    expect(mockedUserRepository.getById).toBeCalledWith("userId");
  });

  it("call user repository to get location info", () => {
    const { sut, mockedUserRepository } = makeSut();
    sut.execute("userId", new CustomLocation(1, 1), new CustomLocation(0, 0));
    expect(mockedUserRepository.getLocation).toBeCalledWith(1, 1);
    expect(mockedUserRepository.getLocation).toBeCalledWith(0, 0);
  });

  it("schedule race for a costumer with broker", () => {
    const { sut, mockedBroker } = makeSut();
    sut.execute("userId", new CustomLocation(1, 1), new CustomLocation(0, 0));
    //TODO: specify race properties to be called
    expect(mockedBroker.scheduleRace).toBeCalledWith(expect.any(Race));
  });

  it("should save a race", () => {
    const { sut, mockedRaceRepository } = makeSut();
    sut.execute("userId", new CustomLocation(1, 1), new CustomLocation(0, 0));
    //TODO: specify race properties to be called
    expect(mockedRaceRepository.save).toBeCalledWith(expect.any(Race));
  });

  function makeSut() {
    const mockedUserRepository = makeMockedUserRepository();
    const mockedBroker = makeBroker();
    const mockedRaceRepository = makeMockedRaceRepository();
    return {
      sut: new RequestRace(
        mockedUserRepository,
        mockedBroker,
        mockedRaceRepository
      ),
      mockedUserRepository,
      mockedBroker,
      mockedRaceRepository,
    };
  }

  function makeMockedUserRepository(): UserRepository {
    return {
      getById: jest.fn().mockReturnValueOnce(new Costumer("userId")),
      getLocation: jest
        .fn()
        .mockReturnValueOnce(new CustomLocation(1, 1))
        .mockReturnValueOnce(new CustomLocation(0, 0)),
    };
  }

  function makeBroker(): Broker {
    return {
      scheduleRace: jest.fn(),
      joinUser: jest.fn(),
      confirmRequestAccepted: jest.fn(),
    };
  }

  function makeMockedRaceRepository(): RaceRepository {
    return {
      save: jest.fn(),
      getById(id) {
        throw new Error("Method not implemented.");
      },
    };
  }
});
