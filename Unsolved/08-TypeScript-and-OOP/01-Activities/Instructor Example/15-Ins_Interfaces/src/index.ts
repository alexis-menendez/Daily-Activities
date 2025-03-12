// Define a Vehicle interface with properties for make, model, and year
interface Vehicle {
  make: string;
  model: string;
  year: number;
}

// Extend the Vehicle interface with an optional property for topSpeed
interface Vehicle {
  topSpeed?: number;
}

// Define a Vehicle object, myCar, with make, model, and year properties
const myCar: Vehicle = {
  make: 'Smart',
  model: 'ForTwo',
  year: 2012,
};

// Define another Vehicle object, myCar2, with make, model, year, and topSpeed properties
const myCar2: Vehicle = {
  make: 'Toyota',
  model: 'Prius',
  year: 2016,
  topSpeed: 140,
};

// Define a function to service a car. If the car's topSpeed is known, it is included in the service message.
const serviceCar = (car: Vehicle) => {
  if (car.topSpeed) {
    console.log(
      `The ${car.year} ${car.make} ${car.model} is being serviced. It's top speed is ${car.topSpeed} mph.`
    );
  } else {
    console.log(`The ${car.year} ${car.make} ${car.model} is being serviced.`);
  }
};

// Call the serviceCar function on myCar and myCar2
serviceCar(myCar);
serviceCar(myCar2);

// Add a method to the Vehicle interface
interface Vehicle {
  raceAtTopSpeed?(car1: Vehicle, car2: Vehicle): Vehicle;
}

// Define a Vehicle object, myCar3, with make, model, year, topSpeed, and raceAtTopSpeed properties
const myCar3: Vehicle = {
  make: 'Bugatti',
  model: 'Veyron',
  year: 2022,
  topSpeed: 268,
  raceAtTopSpeed(car1: Vehicle, car2: Vehicle) {
    // here we are using ! to tell TypeScript that we are sure that topSpeed is defined and override the error that it is possibly undefined
    return car1.topSpeed! > car2.topSpeed! ? car1 : car2;
  },
};

// Call the raceAtTopSpeed method on myCar3 if it exists
// Since the method is optional, we must check if it exists before calling it or we will get an error
if (myCar3.raceAtTopSpeed) {
  // Store the winner of a race between myCar2 and myCar3
  const winner = myCar3.raceAtTopSpeed(myCar2, myCar3);
  // Log the winner
  console.log(
    `The winner of the race between the ${myCar2.year} ${myCar2.make} ${myCar2.model} and the ${myCar3.year} ${myCar3.make} ${myCar3.model} is the ${winner.year} ${winner.make} ${winner.model}!`
  );
}
