import { sum } from "../sum";

test("Sum fn should calculate the sum of two numbers", () => {
  const result = sum(3, 4);
  // Assertation
  expect(result).toBe(7);
  
});
