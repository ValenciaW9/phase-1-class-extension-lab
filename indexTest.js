let polygon; // Update the variable name to polygon
let triangle;
let square;

// Add the import statement for the required helper functions
const { expect } = require('./helpers.js');

// Rest of the code...
describe("Polygon", () => {
  let polygon; // Define the polygon variable

  beforeEach(() => {
    polygon = new Polygon([5, 5, 5]);
  });

  it("has a Polygon class", () => {
    expect(Polygon).to.exist;
  });

  it("Polygon has a countSides getter method that returns the number of sides of the polygon", () => {
    expect(polygon.countSides).to.eq(3);
  });

  it("Polygon has a perimeter getter that calculates perimeter", () => {
    expect(polygon.perimeter).to.eq(15);
  });
});