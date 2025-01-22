import test from "../test.mjs";

function isAdult(age) {
    return age >= 18;
  }

const tester = test("Age function test");

tester.dosNotThrowError(() => { isAdult(1) }, "Function works!");

tester.isEqual(isAdult(17), false, "Test with normal parameters");
tester.isEqual(isAdult(18), true, "Test with normal parameters");
tester.isEqual(isAdult(19), true, "Test with normal parameters");
tester.isEqual(isAdult(9 + 9), true, "Test with addition parameter");
tester.isEqual(isAdult(19 - 2), false, "Test with subtraction parameters");
tester.isEqual(isAdult(22 - 2), true, "Test with subtraction parameters");
tester.isEqual(isAdult(3 * 15), true, "Test with multiplication parameters");
tester.isEqual(isAdult(100 / 15), false, "Test with dividing parameters");
tester.isEqual(isAdult(-18), false, "Test with negative parameters");
tester.isEqual(isAdult(true), false, "Test with boolean parameters");



