const { sum, diff, div, mult, sqR, max } = require("./math");

// Testing Math Object

// Add, subtract, divide, multiply (do not need to use math object)

// Advanced Math (use math object)
// Square root, max

describe("Testing the math module", () => {
  // add
  test("Should add the numbers to get the sum", () => {
    expect(sum(1,2)).toBe(3);
  });

  // subtract
  test("Should subtract the numbers to get the difference", () => {
    expect(diff(2,1)).toBe(1);
  });

  // divide
  test("Should divide the numbers together", () => {
    expect(div(2,1)).toBe(2);
  });

  // multiply
  test("Should multiply the numbers together", () => {
    expect(mult(2,1)).toBe(2);
  });

  // square root
  test("Should find the square root of the number", () => {
    expect(sqR(4)).toBe(2);
  });

  // max
  test("Should find the highest number of the numbers given", () => {
    expect(max(1,5,10)).toBe(10);
  });
});
