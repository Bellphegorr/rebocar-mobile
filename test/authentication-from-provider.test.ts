interface Provider {
  getAuthentication(): Promise<any>;
}

export class AuthenticationFromProvider {
  constructor(private readonly provider: Provider) {}

  execute() {
    this.provider.getAuthentication();
  }
}

describe("AuthenticationFromProvider", () => {
  it("should be defined", () => {
    expect(new AuthenticationFromProvider(provider)).toBeDefined();
  });

  it("should call the provider", () => {
    const authentication = new AuthenticationFromProvider(provider);
    authentication.execute();
    expect(provider.getAuthentication).toHaveBeenCalled();
  });

  const provider = {
    getAuthentication: jest.fn(),
  };
});
