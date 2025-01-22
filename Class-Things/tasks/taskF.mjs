import test from "../test.mjs";

function mysteryFunction (n) {
    return n*n;
}

const tester = test("Valid Mystery function test");

tester.dosNotThrowError(() => { mysteryFunction(1) }, "Function works!");

tester.isEqual(mysteryFunction(5), 25, "Squared 5");
tester.isEqual(mysteryFunction(0.5),0.25, "Squared 0.5");
tester.isEqual(mysteryFunction(0), 0, "Squared 0");
tester.isEqual(mysteryFunction(-4), 16, "Squared -4");
