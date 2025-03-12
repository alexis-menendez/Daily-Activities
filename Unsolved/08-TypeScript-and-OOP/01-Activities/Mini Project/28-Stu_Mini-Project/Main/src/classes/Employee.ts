import type Work from '../interfaces/Work.js';
// Note that the above is explicitly importing in .js files as the current tsconfig cannot correctly path to the necessary file. The classes will be referred correctly after the dist folder is generated.

//Class to create Employee and implements Work interface
class Employee implements Work {
  name: string;
  id: number;
  title: string;
  salary: number;
  constructor(name: string, id: number, title: string, salary: number) {
    this.name = name;
    this.id = id;
    this.title = title; 
    this.salary = salary;
  }

  receivePay(pay: number): number {
    return pay;
  }
}
export default Employee;
