export default class AdvancedMath {

  factorial(value: number) {
    // Make sure input value is integer
    // if (Math.floor(value) !== value) {
    //   throw new Error('Invalid Input');
    // }

    // Make sure input value is positive
    if (value < 0) {
      throw new Error('Invalid Input');
    }

    let result = 1;
    for (let i = 1; i <= value; i++) {
      result *= i;
    }

    return result;
  }
}
