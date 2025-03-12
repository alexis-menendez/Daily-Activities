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

// TODO: Define a Circle class

// TODO: Define a Rectangle class

// TODO: Define a Triangle class

// TODO: Call the displayInfo method for the Circle, Rectangle, and Triangle classes
