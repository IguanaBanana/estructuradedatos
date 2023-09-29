/**
 * @function Fibonacci
 * @description Function to return the N-th Fibonacci number.
 * @param {Integer} n - The input integer
 * @return {Integer} - Return the N-th Fibonacci number
 * @see [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number)
 */

const fibonacci = (n) => {
    if (!Number.isInteger(n)) {
      throw new RangeError('No es un Entero')
    }
  
    if (n < 0) {
      throw new RangeError('No es un Numero Positivo')
    }
  
    if (n === 0) {
      return 1
    }
    return n * factorial(n - 1)
  }
  
  export { factorial }
  