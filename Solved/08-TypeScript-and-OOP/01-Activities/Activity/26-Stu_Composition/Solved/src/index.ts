// Define a base interface for shapes
interface Shape {
  calculateArea(): number;
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
}

// Define a Triangle class
class Triangle implements Shape {
  private base: number;
  private height: number;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  // Implement methods to calculate the area and perimeter for the triangle
  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}

// Define a Drawing class that contains instances of various shapes
class Drawing {
  private shapes: Shape[];

  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  calculateTotalArea(): number {
    let totalArea = 0;
    for (const shape of this.shapes) {
      totalArea += shape.calculateArea();
    }
    return totalArea;
  }
}

// Create instances of the Circle, Rectangle, and Triangle classes
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 4);

// Create a drawing containing these shapes
const drawing = new Drawing([circle, rectangle, triangle]);

// Calculate and display the total area of the drawing
const totalArea = drawing.calculateTotalArea();
console.log('Total Area of Drawing:', totalArea);
