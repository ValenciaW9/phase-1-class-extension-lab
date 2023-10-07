class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [side1, side2, side3] = this.sides;
    return (
      side1 + side2 > side3 &&
      side1 + side3 > side2 &&
      side2 + side3 > side1
    );
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides.every(side => side === this.sides[0]);
  }

  get area() {
    const side = this.sides[0];
    return side * side;
  }
}