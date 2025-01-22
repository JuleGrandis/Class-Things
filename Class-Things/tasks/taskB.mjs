import test from "../test.mjs";

function sum(a, b, ...c) {
    return a + b + c.reduce((prev, cur) => prev + cur);
  }

const tester = test("Sum function test");

tester.dosNotThrowError(() => { sum(1, 1, 1) }, "Function works!");

tester.isEqual(sum(1, 2, 3), 6, "Summing without extra parameters");
tester.isEqual(sum(1, 2, 3, 4, 5, 6, 7), 28, "Summing with extra parameters");
tester.isEqual(sum(1.1, 2.2, 3.3), 6.6, "Summing with decimals");
tester.isEqual(sum(-1, -2, -3), -6, "Summing negative numbers");
tester.isEqual(sum(1, -2, 3), 2, "Summing mixed positive and negative numbers");
tester.isEqual(sum(0, 0, 0), 0, "Summing 0");
tester.isEqual(sum(1e9, 1e2, 1e4), 1000010100, "Summing large numbers");
tester.isEqual(sum(1, 2), 3, "Summing with an empty array");
