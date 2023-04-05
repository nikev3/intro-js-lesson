// 1.
function getPersonStats(name, job, age) {
  console.log(`Hi my name is ${name}, I am ${age} years old, and I am a ${job}.`);
}

// Example usage:
getPersonStats("John", "developer", "30");


// 2.
const sayFirstAndLast = function(str) {
  const firstChar = str[0];
  const lastChar = str[str.length - 1];
  console.log(`the first character is: ${firstChar} and last character is: ${lastChar}`);
}

// Example usage:
sayFirstAndLast("hello");


// 3.
const yellFruitNum = (num, fruit) => {
  console.log(`I have ${num} ${fruit.toUpperCase()}!`);
}

// Example usage:
yellFruitNum(5, "apples");


// 4.
function sliceFruit(fruit) {
  console.log(fruit.slice(2));
}

// Example usage:
sliceFruit("banana");


// 5.
function splitFruit(fruit) {
  return fruit.split("");
}

// Example usage:
console.log(splitFruit("orange"));
