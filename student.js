// 1.
function sumOfThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// 2.
const productOfThree = function(num1, num2, num3) {
  return num1 * num2 * num3;
};

// 3.
const getRemainder = (num1, num2) => {
  return num1 % num2;
};

// 4.
function getRootRounded(num) {
  return Math.ceil(Math.sqrt(Math.abs(num)));
}

// 5.
function getRandom() {
  return Math.floor(Math.random() * 100) + 1;
}
