import { sum } from "./sum";

describe("sum tests", () => {
  it("should return a + b", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
