import { CustomLocation } from "@/domain/custom-location";

describe("CustomLocation", () => {
  it("should instanciante CustomLocation", () => {
    expect(makeSut().sut).toBeInstanceOf(CustomLocation);
  });
});

function makeSut() {
  return {
    sut: new CustomLocation(1, 2),
  };
}
