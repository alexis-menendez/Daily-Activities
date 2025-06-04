import Animal from './classes/Animal.js';
import Cli from './classes/Cli.js';
import type Employee from './classes/Employee.js';
import ZooKeeper from './classes/ZooKeeper.js';
import ZooWorker from './classes/ZooWorker.js';
// Note that the above are explicitly importing in .js files as the current tsconfig cannot correctly path to the necessary files. The classes will be referred correctly after the dist folder is generated.

// How we'll track the existing animals and employees
const starterAnimalData: Animal[] = [];
const starterEmployeeData: Employee[] = [];

// Add the existing animals and employees
const animal1 = new Animal('Foxes', true, 3, 10);
const zooKeeper1 = new ZooKeeper('Joe', 1, 'Zoo Keeper', 80000, 'Fox handling');
const zooWorker1 = new ZooWorker('Karl', 2, 'Manager', 100000, true);

starterAnimalData.push(animal1);
starterEmployeeData.push(zooKeeper1);
starterEmployeeData.push(zooWorker1);

// Start the inquirer prompt
const cli = new Cli(starterAnimalData, starterEmployeeData);

cli.startCli();
