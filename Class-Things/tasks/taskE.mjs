import test from "../test.mjs";

function toTitleCase(sentence) {
    let output = ""; 
    let capitalizeNext = true; 
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      if (char === " ") {
        output += char; 
        capitalizeNext = true; 
      } else if (capitalizeNext) {
        output += char.toUpperCase(); 
        capitalizeNext = false; 
      } else {
        output += char.toLowerCase(); 
      }
  
    }
  
    return output.trim(); 
  }

const tester = test("Valid Mystery function test");

tester.dosNotThrowError(() => { toTitleCase(1) }, "Function works!");

tester.isEqual(toTitleCase("hello world"), "Hello World", "Test with Hello World");
tester.isEqual(toTitleCase("money makes a man's verb consummate the noun"), "Money Makes A Man's Verb Consummate The Noun", "Test with Ren - Money Ties lyrics");
tester.isEqual(toTitleCase("bAnAnA"), "Banana", "Test with woobly banana");
tester.isEqual(toTitleCase("1word"), "1word", "Test with 1word");

