// TODO: Add comments throughout to describe the code below

// TODO: How can the test cases be improved to provide broader test coverage?
// The provided test cases use only whole number values between 1 and 5.
// For better coverage, we could also include test cases for negative numbers, fractional numbers
// and division by zero.

// The Arithmetic class is imported from arithmetic.js.
import Arithmetic from '../arithmetic.js';

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => {
  // A test case is created to check that sum() does in fact return the two numbers added together.
  // Using the two for loops, we test using all combinations of integers from 1 to 5.
  describe('sum', () => {
    it('should take two numbers and add them together', () => {
     const arithmetic = new Arithmetic();
      for (let x = 1; x <= 5; x++) {
        for (let y = 1; y <= 5; y++) {
          expect(arithmetic.sum(x, y)).toEqual(x + y);
        }
      }
    });
  });

  // A test case is created to check that difference() does in fact return the difference between the two numbers.
  // Using the two for loops, we test using all combinations of integers from 1 to 5.
  describe('difference', () => {
    it('should take two numbers and find the difference', () => {
      const arithmetic = new Arithmetic();
      for (let x = 1; x <= 5; x++) {
        for (let y = 1; y <= 5; y++) {
          expect(arithmetic.difference(x, y)).toEqual(x - y);
        }
      }
    });
  });

  // A test case is created to check that product() does in fact return the two numbers multiplied together.
  // Using the two for loops, we test using all combinations of integers from 1 to 5.
  describe('product', () => {
    it('should take two numbers and multiply them together', () => {
      const arithmetic = new Arithmetic();
      for (let x = 1; x <= 5; x++) {
        for (let y = 1; y <= 5; y++) {
          expect(arithmetic.product(x, y)).toEqual(x * y);
        }
      }
    });
  });

  // A test case is created to check that quotient() does in fact return the quotient of the two numbers.
  // Using the two for loops, we test using all combinations of integers from 1 to 5.
  describe('quotient', () => {
    it('should take two numbers and divide them', () => {
      const arithmetic = new Arithmetic();
      for (let x = 1; x <= 5; x++) {
        for (let y = 1; y <= 5; y++) {
          expect(arithmetic.quotient(x, y)).toEqual(x / y);
        }
      }
    });
  });
});
