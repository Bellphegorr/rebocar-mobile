import { Broker } from "@/infrastructure/broker";
import { RemoteSocket, Socket } from "socket.io";

jest.mock("socket.io", () => {
  return {
    Server: jest.fn().mockImplementation(() => {
      return {
        on: jest.fn(),
      };
    }),
    Socket: jest.fn().mockImplementation(() => {
      return {
        broadcast: {
          emit: jest.fn(),
        },
        emit: jest.fn(),
        join: jest.fn(),
        in: jest.fn().mockReturnValue({
          fetchSockets: jest
            .fn()
            .mockReturnValueOnce([
              { id: "driverId" } as RemoteSocket<any, any>,
              { id: "driverId2" } as RemoteSocket<any, any>,
            ]),
        }),
        to: jest.fn().mockReturnValue({
          emit: jest.fn(),
        }),
      };
    }),
  };
});

describe("Broker", () => {
  it("should instanciante Broker", () => {
    expect(makeSut().sut).toBeInstanceOf(Broker);
  });
});

describe("scheduleRace", () => {
  it("should get drivers from socket", () => {
    const { sut, socket } = makeSut();
    sut.scheduleRace({} as any);
    expect(socket.in("drivers").fetchSockets).toBeCalled();
  });

  it("check if has drivers", async () => {
    const { sut, socket } = makeSut();
    socket.in("drivers").fetchSockets = jest.fn().mockReturnValueOnce([]);
    await expect(sut.scheduleRace({} as any)).rejects.toThrow(
      "No drivers available"
    );
  });

  it("should emit to drivers", async () => {
    const { sut, socket } = makeSut();
    await sut.scheduleRace({} as any);
    //TODO: check if emit to drivers has been called with correct params (race)
    expect(socket.to("driverId").emit).toBeCalled();
  });
});

describe("joinUser", () => {
  it("should call socket join", () => {
    const { sut, socket } = makeSut();
    sut.joinUser("userId");
    expect(socket.join).toBeCalledWith("userId");
  });
});

function makeSut() {
  const socket = new Socket({} as any, {} as any, {} as any);
  return {
    sut: new Broker(socket),
    socket,
  };
}
