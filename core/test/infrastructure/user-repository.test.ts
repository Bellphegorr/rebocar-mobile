import { UserRepository } from "@/infrastructure/user-repository";

describe("UserRepository", () => {
  it("should instanciante UserRepository", () => {
    expect(makeSut().sut).toBeInstanceOf(UserRepository);
  });
});

function makeSut() {
  return {
    sut: new UserRepository(),
  };
}
