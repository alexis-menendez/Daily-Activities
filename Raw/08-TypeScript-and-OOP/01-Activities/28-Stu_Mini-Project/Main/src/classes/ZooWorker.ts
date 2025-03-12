import Employee from './Employee.js';
// Note that the above is explicitly importing in .js files as the current tsconfig cannot correctly path to the necessary file. The classes will be referred correctly after the dist folder is generated.

// ZooWorker class inherits Employee properties
class ZooWorker extends Employee {
  constructor(
    name: string,
    id: number,
    title: string,
    salary: number,
    private cleanUniform: boolean
  ) {
    super(name, id, title, salary);
    this.cleanUniform = cleanUniform;
  }

  getCleanUniform(): boolean {
    return this.cleanUniform;
  }
}
export default ZooWorker;
