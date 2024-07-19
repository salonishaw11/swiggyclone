import { sum } from "../sum";

it("Should Calculate the sum of two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
