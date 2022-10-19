import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

class MockRepositor implements UserRepository {
  getUser = jest.fn(async () => new User("username"));
}

export class LoginUseCase {
  constructor(private loginProvider: UserRepository) {}

  Execute() {
    return this.loginProvider.getUser("userId");
  }
}

describe("LoginUseCase", () => {
  it("should create an instance", () => {
    expect(new LoginUseCase(new MockRepositor())).toBeTruthy();
  });

  it("should return a user", async () => {
    const sut = MakeSut();
    const user = await sut.Execute();
    expect(user).toBeTruthy();
    expect(user).toBeInstanceOf(User);
  });

  it("should call user repository", () => {
    const { sut, mockProvider } = MakeSutAndReturnRepository();
    sut.Execute();
    expect(mockProvider.getUser.mock.calls.length).toBe(1);
  });

  function MakeSut() {
    return new LoginUseCase(new MockRepositor());
  }

  function MakeSutAndReturnRepository() {
    const mockRepository = new MockRepositor();
    return {
      sut: new LoginUseCase(mockRepository),
      mockProvider: mockRepository,
    };
  }
});
