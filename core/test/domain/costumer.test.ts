import { User } from "@/domain/abstractions/user";
import { Costumer } from "@/domain/costumer";
import { CustomLocation } from "@/domain/custom-location";

describe("costumer", () => {
  it("should be instance of User", () => {
    expect(new Costumer("some-id")).toBeInstanceOf(User);
  });

  it("should call CancelRace() from Costumer", () => {
    const sut = makeSut();
    sut.cancelRace();
  });

  it("call request race", () => {
    const sut = makeSut();
    sut.requestRace(new CustomLocation(0, 0), new CustomLocation(0, 0));
  });

  it("after request race, set properties with expected values", () => {
    const sut = makeSut();
    sut.requestRace(new CustomLocation(0, 0), new CustomLocation(0, 0));
    expect(sut.getStatus()).toBe("requested");
    expect(sut.getLocation()).toEqual(new CustomLocation(0, 0));
    expect(sut.getExpectLocation()).toEqual(new CustomLocation(0, 0));
  });

  function makeSut() {
    const sut = new Costumer("some-id");
    return sut;
  }
});
