import { User } from "../src/domain/user";
import { UserRepository } from "../src/infrastructure/user-repository";

describe("UserRepository", () => {
  it("should create an instance", () => {
    expect(new UserRepository()).toBeTruthy();
  });

  it("should return a user", async () => {
    const sut = MakeSut();
    const user = await sut.getUser("any-id");
    expect(user).toBeTruthy();
    expect(user).toBeInstanceOf(User);
  });

  function MakeSut() {
    return new UserRepository();
  }
});
