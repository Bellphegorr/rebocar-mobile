/* global __DEV__ */
import { User } from "../src/domain/user";
import { UserRepository } from "../src/infrastructure/user-repository";

describe("UserRepository", () => {
  it("should create an instance", () => {
    const mockProvider = {
      fetchUser: jest.fn(),
    };
    expect(new UserRepository(mockProvider)).toBeTruthy();
  });

  it("should return a user", async () => {
    const sut = MakeSut();
    const user = await sut.getUser("any-id");
    expect(user).toBeTruthy();
    expect(user).toBeInstanceOf(User);
  });

  it("should call provider with correct params", async () => {
    const { sut, mockProvider } = MakeSutAndReturnMockProvider();
    const userIdToTest = "any-id";
    await sut.getUser(userIdToTest);
    expect(mockProvider.fetchUser).toHaveBeenCalledWith(userIdToTest);
  });

  it("transform provider response to user", async () => {
    const { sut, mockProvider } = MakeSutAndReturnMockProvider();
    const userIdToTest = "any-id";
    const providerResponse = { email: "any-email" };
    mockProvider.fetchUser.mockResolvedValue(providerResponse);
    const user = await sut.getUser(userIdToTest);
    expect(user.getUserName()).toEqual(providerResponse.email);
  });

  function MakeSut() {
    const mockProvider = {
      fetchUser: jest.fn(),
    };
    return new UserRepository(mockProvider);
  }

  function MakeSutAndReturnMockProvider() {
    const mockProvider = {
      fetchUser: jest.fn(),
    };
    return { sut: new UserRepository(mockProvider), mockProvider };
  }
});
