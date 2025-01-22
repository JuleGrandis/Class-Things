import test from "../test.mjs";


function sum(a,b){
    return a + b
}

const tester = test("Sum function test");

tester.dosNotThrowError(() => { sum(1, 1) }, "Function works!");

let a = 1;
let b;

tester.isEqual(sum(3, 4), 7, "Summing 3 + 4");
tester.isEqual(sum(0, 0), 0, "Summing with 0");
tester.isEqual(sum(1, b), 1, "Summing with undefined");
tester.isEqual(sum(-1, -2), -3, "Summing with negative numbers");
tester.isEqual(sum(1.1, 2.2), 3.3, "Summing with decimals");