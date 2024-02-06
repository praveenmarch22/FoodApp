import { sum } from "../sum";

test("The suum function should return sum of two variables", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
