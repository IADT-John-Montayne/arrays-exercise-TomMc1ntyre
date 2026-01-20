// let names= ["Tom", "Jerry", "Spike"]; // Array of character names
// console.log(names[1]); // Output the second character name

// names[1] = "Brian"; // Update the second character name

// console.log(names); // Output the updated array of character names

// names.push("Tyke"); // Add a new character name to the array

// console.log(names); // Output the updated array of character names


let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// function setup() {
// 	createCanvas(500, 500);
// 	background(55);
// 	rectMode(CENTER);
// }

// function draw() {
// 	rect(250, 250, 100, 100);
// }


// Exercise

let basket = ["apple", "banana", "orange", "pear"];

console.log(basket[0]); // Output the first fruit in the basket
console.log(basket[basket.length - 1]); // Output the last fruit in the basket

basket[1] = "kiwi"; // Change the second fruit to kiwi

basket.pop(); // Remove the last fruit from the basket

basket.push("mango"); // Add a new fruit to the basket

for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
} // Output all fruits in the basket