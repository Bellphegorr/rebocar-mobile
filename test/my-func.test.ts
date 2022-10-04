import { myFunc } from "@/core/my-func";

describe("myFunc", () => {
  it("should return the sum of two numbers", () => {
    expect(myFunc(1, 2)).toBe(3);
  });
});
