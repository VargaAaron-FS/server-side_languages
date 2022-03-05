const sum = (a, b) => {
  return a + b;
};

const diff = (a, b) => {
  return a - b;
};

const div = (a, b) => {
  return a / b;
};

const mult = (a, b) => {
  return a * b;
};

const sqR = (num) => {
  return Math.sqrt(num);
};

const max = (a, b, c) => {
  return Math.max(a, b, c);
};

module.exports = { sum, diff, div, mult, sqR, max };
