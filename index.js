class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  // Use the get keyword to create a getter method countSides
  get countSides() {
    return this.sides.length;
  }

  // Use the get keyword to create a getter method perimeter
  get perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }
}
class Triangle extends Polygon {
  // Use the get keyword to create a getter method isValid
  get isValid() {
    if (this.countSides !== 3) {
      return false;
    }

    const [a, b, c] = this.sides;
    return a + b > c && a + c > b && b + c > a;
  }
}
class Square extends Polygon {
  // Use the get keyword to create a getter method isValid
  get isValid() {
    if (this.countSides !== 4) {
      return false;
    }

    const [a, b, c, d] = this.sides;
    return a === b && b === c && c === d;
  }

  // Use the get keyword to create a getter method area
  get area() {
    if (!this.isValid) {
      return "Invalid square";
    }

    const [side] = this.sides;
    return side * side;
  }
}