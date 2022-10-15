interface LoginProvider {
  Login(): void;
}

class MockProvider implements LoginProvider {
  public Login = jest.fn();
}

class LoginUseCase {
  constructor(private loginProvider: LoginProvider) {}

  Execute() {
    this.loginProvider.Login();
    return { username: "username" };
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
