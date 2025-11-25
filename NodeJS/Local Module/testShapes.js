const circle = require("./Circle");
const rectangle = require("./rectangle");
const triangle = require("./triangle");

console.log("Circle Area:", circle.calcArea(5));
console.log("Circle Circumference:", circle.calcCircumference(5));
console.log("Circle Diameter:", circle.calcDiameter(5));

console.log("Rectangle Area:", rectangle.calcArea(10, 5));
console.log("Rectangle Perimeter:", rectangle.calcPerimeter(10, 5));

console.log("Is triangle equilateral?", triangle.isEquilateral(3, 3, 3));
console.log("Triangle Perimeter:", triangle.calcPerimeter(3, 4, 5));
