// Prototype methods on Constructor functions

function Car(brand, model, year, price) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.price = price;
}

// Creating a method outside of the constructor function so that this method can be inherited when object is instantiated.
Car.prototype.drive = function () {
  console.log('Vroooom!');
};

const car = new Car('Honda', 'CRV', 2018, 30000);

// Logging the car object to show that the drive method is a prototype method and NOT a property of the object.
console.log(car);

car.drive();
