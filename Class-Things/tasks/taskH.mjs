import test from "../test.mjs";  

  function calculateTotalPriceDeez(cart, taxRate) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return total + total * taxRate;
  }



const tester = test("Valid Mystery function test");

tester.dosNotThrowError(() => { calculateTotalPrice(1) }, "Function works!");

  tester.isEqual(calculateTotalPriceDeez([{ price: 10, quantity: 2 }], 0.1), 22); 
  tester.isEqual(calculateTotalPriceDeez([{ price: 5, quantity: 4 }], 0.2), 24);  
  tester.isEqual(calculateTotalPriceDeez([], 0.1), 0);                           
  tester.isEqual(calculateTotalPriceDeez([{ price: 15, quantity: 1 }], 0), 15);  
  
