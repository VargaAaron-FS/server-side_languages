const { sum, diff, div, mult } = require("./math");

// Testing Math Object

// Add, subtract, divide, multiply (do not need to use math object)

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
  test("Should subtract the numbers to get the difference", () => {
    expect(div(2,1)).toBe(2);
  });

  // multiply
  test("Should subtract the numbers to get the difference", () => {
    expect(mult(2,1)).toBe(2);
  });
});

// Advanced Math (use math object)
// square root, max

// Start here
