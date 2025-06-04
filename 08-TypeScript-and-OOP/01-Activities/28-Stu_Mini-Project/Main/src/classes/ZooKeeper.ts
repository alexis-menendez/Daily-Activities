import Employee from './Employee.js';
// Note that the above is explicitly importing in .js files as the current tsconfig cannot correctly path to the necessary file. The classes will be referred correctly after the dist folder is generated.

// ZooKeeper class inherits the Employee class's properties
class ZooKeeper extends Employee {
  constructor(
    name: string,
    id: number,
    title: string,
    salary: number,
    private specialty: string
  ) {
    super(name, id, title, salary);
    this.specialty = specialty;
  }

  getSpecialty(): string {
    return this.specialty;
  }
}
export default ZooKeeper;
