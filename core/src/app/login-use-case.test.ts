interface LoginProvider {
  Login(): User;
}

class MockProvider implements LoginProvider {
  public Login = jest.fn(() => new User("username"));
}

class User {
  public username: string;

  constructor(username: string) {
    this.username = username;
  }

  public getUserName() {
    return this.username;
  }
}

class LoginUseCase {
  constructor(private loginProvider: LoginProvider) {}

  Execute() {
    return this.loginProvider.Login();
  }
}

describe("LoginUseCase", () => {
  it("should create an instance", () => {
    expect(new LoginUseCase(new MockProvider())).toBeTruthy();
  });

  it("should return a user", () => {
    const sut = MakeSut();
    const user = sut.Execute();
    expect(user).toBeTruthy();
    expect(user).toBeInstanceOf(User);
  });

  it("should call provider to login", () => {
    const { sut, mockProvider } = MakeSutAndReturnProvider();
    sut.Execute();
    expect(mockProvider.Login.mock.calls.length).toBe(1);
  });

  function MakeSut() {
    return new LoginUseCase(new MockProvider());
  }

  function MakeSutAndReturnProvider() {
    const mockProvider = new MockProvider();
    return { sut: new LoginUseCase(mockProvider), mockProvider };
  }
});
