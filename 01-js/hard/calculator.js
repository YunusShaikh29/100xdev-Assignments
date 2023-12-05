/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    if (isNaN(number)) throw new Error("Invalid input");
    this.result += number;
  }

  subtract(number) {
    if (isNaN(number)) throw new Error("Invalid input");
    this.result -= number;
  }

  multiply(number) {
    if (isNaN(number)) throw new Error("Invalid input");
    this.result *= number;
  }

  divide(number) {
    if (isNaN(number) || number === 0) throw new Error("Invalid input");
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove continuous spaces and validate the expression for invalid characters
    const formattedExpression = expression
      .replace(/\s+/g, "")
      .replace(/[^\d+\-*/().]/g, "");

    // Validate parentheses in the expression
    const parenthesesCount = formattedExpression
      .split("")
      .reduce((count, char) => {
        if (char === "(") count++;
        else if (char === ")") count--;
        if (count < 0) throw new Error("Invalid parentheses");
        return count;
      }, 0);
    if (parenthesesCount !== 0) throw new Error("Invalid parentheses");

    // Evaluate the expression
    try {
      this.result = eval(formattedExpression); // Use eval to perform the calculation
      if (!isFinite(this.result)) throw new Error("Invalid result");
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;
