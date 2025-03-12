// Define a base interface for shapes
interface Shape {
  calculateArea: () => number;
  calculatePerimeter: () => number;
}

// Define a Circle class
class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  // Implement methods to calculate the area and perimeter for the circle
  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Define a Rectangle class
class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // Implement methods to calculate the area and perimeter for the rectangle
  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// Define a Triangle class
class Triangle implements Shape {
  private base: number;
  private height: number;
  private side1: number;
  private side2: number;

  constructor(base: number, height: number, side1: number, side2: number) {
    this.base = base;
    this.height = height;
    this.side1 = side1;
    this.side2 = side2;
  }

  // Implement methods to calculate the area and perimeter for the triangle
  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }

  calculatePerimeter(): number {
    return this.base + this.side1 + this.side2;
  }
}

// Calculates the total area of an array of shapes
function calculateTotalArea(shapes: Shape[]): number {
  let totalArea = 0;
  for (const shape of shapes) {
    totalArea += shape.calculateArea();
  }
  return totalArea;
}

// Calculates the total perimeter of an array of shapes
function calculateTotalPerimeter(shapes: Shape[]): number {
  let totalPerimeter = 0;
  for (const shape of shapes) {
    totalPerimeter += shape.calculatePerimeter();
  }
  return totalPerimeter;
}

// Create instances of the Circle, Rectangle, and Triangle classes
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 4, 5, 5);

// Create an array to hold all of the shapes (Circle, Rectangle, and Triangle)
const shapes: Shape[] = [circle, rectangle, triangle];

// Display the total area of all shapes
console.log('Total Area:', calculateTotalArea(shapes));

// Display the total perimeter of all shapes
console.log('Total Perimeter:', calculateTotalPerimeter(shapes));
