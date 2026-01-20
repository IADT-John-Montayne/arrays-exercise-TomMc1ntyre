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

// -----Exercise------

// Read from the array
let basket = ["apple", "banana", "orange", "pear"];

console.log(basket[0]); // Output the first fruit in the basket
console.log(basket[basket.length - 1]); // Output the last fruit in the basket


// Modify the basket
basket[1] = "kiwi"; // Change the second fruit to kiwi

basket.pop(); // Remove the last fruit from the basket

basket.push("mango"); // Add a new fruit to the basket

for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
} // Output all fruits in the basket

for (let i = 0; i < basket.length; i++) {
  console.log("Fruit " + (i + 1) + ": " + basket[i]);
} // Output all fruits in the basket in order with their positions


// Search for Fruit
console.log(basket.indexOf("orange")); // Find the position of orange in the basket if its not in there itll return -1

let citrus = basket.slice(1, 3);


// Copy part of the basket
console.log(citrus); // Create a new array with the second and third fruits from the basket and output it