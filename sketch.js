// let names= ["Tom", "Jerry", "Spike"]; // Array of character names
// console.log(names[1]); // Output the second character name

// names[1] = "Brian"; // Update the second character name

// console.log(names); // Output the updated array of character names

// names.push("Tyke"); // Add a new character name to the array

// console.log(names); // Output the updated array of character names


// let fruits = ["apple", "banana", "orange"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// function setup() {
// 	createCanvas(500, 500);
// 	background(55);
// 	rectMode(CENTER);
// }

// function draw() {
// 	rect(250, 250, 100, 100);
// }

// ----- Exercise: Fruit Basket Manager ------

// Starting array
let basket = ["apple", "banana", "orange", "pear"];

// Read from the array

console.log(basket[0]);                  // 1. First fruit
console.log(basket[basket.length - 1]);  // 2. Last fruit


// Modify the basket

basket[basket.indexOf("banana")] = "kiwi";  // Replace banana with kiwi

basket.pop();              // Remove the last fruit ("pear")
basket.unshift("mango");   // Add mango to the START of the basket


// Loop through the basket

for (let i = 0; i < basket.length; i++) {
  console.log("Fruit " + (i + 1) + ": " + basket[i]);
}


// --- Search for fruit ---

let index = basket.indexOf("orange");

if (index !== -1) {
  console.log("Orange found at index " + index);
} else {
  console.log("Orange not found");
}


// Copy part of the basket

let citrus = basket.slice(1, 3);

console.log(citrus);  // Should contain the middle two fruits
console.log(basket);  // Original basket remains unchanged