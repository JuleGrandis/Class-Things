import test from "../test.mjs";

function mysteryFunction (n) {
    return (n + 10)/2;
}

const tester = test("Valid Mystery function test");

tester.dosNotThrowError(() => { mysteryFunction(1) }, "Function works!");

tester.isEqual(mysteryFunction(5), 7.5, "Shenanigans worked")
tester.isEqual(mysteryFunction(10),10, "Shenanigans worked");  
tester.isEqual(mysteryFunction(0),5, "Shenanigans worked");   
tester.isEqual(mysteryFunction(-4) ,3, "Shenanigans worked");  