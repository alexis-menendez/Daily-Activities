// Define a Shape class
class Shape {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Methods to calculate the area and perimeter
  calculateArea(): number {
    return 0;
  }

  calculatePerimeter(): number {
    return 0;
  }

  // Method to display the shape information
  displayInfo(): void {
    console.log(`----------${this.name}----------`);
    console.log(`Area: ${this.calculateArea()}`);
    console.log(`Perimeter: ${this.calculatePerimeter()}`);
    console.log();
  }
}

// Define a Circle class
class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super('Circle');

    this.radius = radius;
  }

  // Override methods to calculate the area and perimeter for the circle
  override calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  override calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Define a Rectangle class
class Rectangle extends Shape {
  private length: number;
  private width: number;

  constructor(length: number, width: number) {
    super('Rectangle');

    this.length = length;
    this.width = width;
  }

  // Override methods to calculate the area and perimeter for the rectangle
  override calculateArea(): number {
    return this.length * this.width;
  }

  override calculatePerimeter(): number {
    return 2 * (this.length + this.width);
  }
}

// Define a Triangle class
class Triangle extends Shape {
  private base: number;
  private height: number;
  private side1: number;
  private side2: number;

  constructor(
    base: number,
    height: number,
    side1: number,
    side2: number
  ) {
    super('Triangle');

    this.base = base;
    this.height = height;
    this.side1 = side1;
    this.side2 = side2;
  }

  // Override methods to calculate the area and perimeter for the triangle
  override calculateArea(): number {
    return 0.5 * this.base * this.height;
  }

  override calculatePerimeter(): number {
    return this.base + this.side1 + this.side2;
  }
}

// Call the displayInfo method for the Circle, Rectangle, and Triangle classes
const circle = new Circle(5);
circle.displayInfo();

const rectangle = new Rectangle(4, 6);
rectangle.displayInfo();

const triangle = new Triangle(3, 4, 5, 5);
triangle.displayInfo();
