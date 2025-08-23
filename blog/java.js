console.log("Having breakfast...")
console.log("Having Lunch...")
console.log("Having Dinner...")







for( let i= 5; i <= 5; i++){
  console.log("Push-up " + i)
}





const fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "cherry"

// Updating
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]



const person = {
  name: "Alice",
  age: 25,
  job: "Engineer"
};

console.log(person.name);    // "Alice"
console.log(person["age"]);  // 25

// Updating
person.job = "Designer";
console.log(person.job); // "Designer"

// Define a function
function greet(name) {
  return `Hello, ${name}!`;
}

// Call (use) the function
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob"));   // "Hello, Bob!"
