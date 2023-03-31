// 1. Function statement to double a number
function doubleNumber(num) {
return num * 2;
}

// 2. Function expression to square a number
const squareNumber = function(num) {
return num * num;
}

// 3. Arrow function to multiply two numbers
const productNumber = (num1, num2) => {
return num1 * num2;
}

// Example usage
console.log(doubleNumber(5)); // Output: 10
console.log(squareNumber(4)); // Output: 16
console.log(productNumber(2, 3)); // Output: 6
