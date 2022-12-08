import { Driver } from "@/domain/driver";

describe("Driver", () => {
  it("should instanciante Driver", () => {
    expect(makeSut().sut).toBeInstanceOf(Driver);
  });
});

function makeSut() {
  return {
    sut: new Driver("driver-id"),
  };
}
