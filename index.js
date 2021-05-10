// # Recursion

// #### Calculate the sum of natural number up to n
// * Write a JavaScript program to compute the sum of an array of integers

const array = [1, 2, 3, 4, 5, 6]

const sum = array => (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
// had no idea, found this on Stack Overflow and understood what it's doing. Would never thought of that myself

const result = sum(array);  // return 21
console.log(result);