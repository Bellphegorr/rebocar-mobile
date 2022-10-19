import { User } from "../domain/user";
import { UserRepository as Repository } from "../domain/user-repository";

export class UserRepository implements Repository {
  async getUser(userId: string): Promise<User> {
    console.log("UserRepository.GetUser");
    return new User("username");
  }
}

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
