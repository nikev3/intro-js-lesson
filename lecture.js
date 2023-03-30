// 1. Link the script.js file from the HTML
// In the HTML file, include the following line:
// <script src="script.js"></script>

// 2. Console Log + Comments + Reserved Words + Camel Case + Naming Convention
console.log("Hello, world!"); // Outputs "Hello, world!" to the console

// 3. Creating Variables + Data Types
var myVariable = "Hello"; 
let myNumber = 42; 
const myConst = "This value cannot be changed"; 


// 4. Creating Functions (+ Event Listeners?)
function myFunction() { 
  console.log("Hello, world!");
}


const myArrowFunction = () => {
  console.log("Hello, world!");
}

// To add an event listener to an HTML element, you can use the addEventListener() method. For example:
const myButton = document.querySelector("#my-button");

myButton.addEventListener("click", () => {
  console.log("Button clicked!");
});

// 5. Strings
const myString = "Hello, world!";

console.log(myString.charAt(0)); // "H"
console.log(myString.substring(0, 5)); // "Hello"
console.log(myString.toUpperCase()); // "HELLO, WORLD!"

// 6. Numbers
myNumber = 42;

console.log(myNumber + 1); // 43
console.log(myNumber - 1); // 41
console.log(myNumber * 2); // 84
console.log(myNumber / 2); // 21

// 7. Arrays and Loops
const myArray = [1, 2, 3];

myArray.push(4);
console.log(myArray); // [1, 2, 3, 4]

myArray.pop();
console.log(myArray); // [1, 2, 3]

myArray.forEach((item) => {
  console.log(item);
});

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// 8. If Statements/Conditionals
if (myNumber === 42) {
  console.log("The answer to the ultimate question of life, the universe, and everything.");
} else if (myNumber > 42) {
  console.log("Greater than 42");
} else {
  console.log("Less than 42");
}

// 9. DOM Manipulation

const myParagraph = document.createElement("p");
myParagraph.textContent = "Hello, world!";
document.body.appendChild(myParagraph); 

// 10. Events

document.addEventListener("keydown", (event) => {
  console.log(`You pressed the ${event.key} key!`);
});

