import { useState } from 'react';
import employeeData from './data/employees.json';
import type Employee from './utils/interfaces/Employee';
import './App.css';
import EmployeeCard from './components/EmployeeCard';

function App() {
  const [employees, setEmployees] = useState<Employee[]>(employeeData);
  const relocateToNy = () => {
    const relocatedTeam = employees.map((employee) => {
      //Throws error because property is set as readonly, so value cannot be reassigned. This is similar to the `const` keyword.
      employee.location = {
        city: 'New York',
        state: 'NY',
      };
      //Doesn't throw an error because only the entire object was marked as `readonly`, allowing for changes to be made to the individual properties.
      employee.location.city = 'New York';
      employee.location.state = 'NY';

      return employee;
    });
    setEmployees(relocatedTeam);
  };
  const trainInTypescriptAndReact = () => {
    const trainedTeam = employees.map((employee: Employee) => {
      //Throws error because property is set as readonly, so value cannot be reassigned. This is similar to the `const` keyword.
      employee.skills = [...employee.skills, 'TypeScript'];
      //Throws error because type is set to `readonly` string[], so values cannot be added or changed.
      employee.skills.push('React');
      return employee;
    });
    setEmployees(trainedTeam);
    //Note that TypeScript errors only show up at compile time, so this button will still add "TypeScript" and "React" to each employee even though TypeScript errors exist.
  };
  return (
    <div className='App'>
      <h1>Employee directory</h1>
      <div className='controls'>
        <button onClick={relocateToNy}>Relocate to New York City</button>
        <button onClick={trainInTypescriptAndReact}>
          Teach Team TypeScript and React
        </button>
      </div>
      <main>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </main>
    </div>
  );
}

export default App;
