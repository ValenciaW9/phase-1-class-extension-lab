const Polygon = require('./Polygon');
const Triangle = require('./Triangle');
const Square = require('./Square');

// Create a new instance of Polygon
const polygon = new Polygon([5, 5, 5]);

// Test Polygon methods
console.log(polygon.countSides); // Output: 3
console.log(polygon.perimeter); // Output: 15

// Create a new instance of Triangle
const triangle = new Triangle([5, 5, 5]);
const triangle2 = new Triangle([15, 10, 1]);

// Test Triangle methods
console.log(triangle.countSides); // Output: 3
console.log(triangle.isValid); // Output: true
console.log(triangle2.isValid); // Output: false
console.log(triangle.perimeter); // Output: 15
console.log(triangle2.perimeter); // Output: 26

// Create a new instance of Square
const square = new Square([5, 5, 5, 5]);
const square2 = new Square([5, 4, 3, 2]);

// Test Square methods
console.log(square.countSides); // Output: 4
console.log(square.isValid); // Output: true
console.log(square2.isValid); // Output: false
console.log(square.perimeter); // Output: 20
console.log(square.area); // Output: 25
