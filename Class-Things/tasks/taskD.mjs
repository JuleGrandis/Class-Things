import test from "../test.mjs";

function isValidPassword(password) {
    if (password.length < 8 || password.length > 16) {
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    if (!/\d/.test(password)) {
      return false;
    }
    return true;
  }

const tester = test("Valid Password Test function test");

tester.dosNotThrowError(() => { isValidPassword(1) }, "Function works!");

tester.isEqual(isValidPassword("A123456"), false, "Test with < 8 characters");
tester.isEqual(isValidPassword("A1234567"), true, "Test with fulfilled requirements");
tester.isEqual(isValidPassword("A1234567891234567"), false, "Test with > 16 characters");
tester.isEqual(isValidPassword("a1234567"), false, "Test with no uppercase character");
tester.isEqual(isValidPassword("abBaababa"), false, "Test with no numbers");
tester.isEqual(isValidPassword("A1++--//"), true, "Test with symbols");
tester.isEqual(isValidPassword("A123456😂"), true, "Test with special characters");
tester.isEqual(isValidPassword("A1234567"), true, "Test with normal parameters");
tester.isEqual(isValidPassword("Å1234567"), false, "Test with Æ/Ø/Å");
tester.isEqual(isValidPassword("漢字1234567"), false, "Test with kanji");
