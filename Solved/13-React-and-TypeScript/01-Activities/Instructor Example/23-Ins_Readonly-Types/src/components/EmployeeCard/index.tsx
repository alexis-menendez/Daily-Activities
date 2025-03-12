import type Employee from '../../utils/interfaces/Employee';
import './style.css';

function EmployeeCard(props: Employee) {
  return (
    <div className='EmployeeCard'>
      <h2>
        {props.fullName} <em>({props.userName})</em>
      </h2>
      <h3>
        Location: {props.location.city}, {props.location.state}
      </h3>
      <h3>
        Salary:{' '}
        {props.salary.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </h3>
      <h3>Skills:</h3>
      <div className='skillsDiv'>
        {props.skills.map((skill, i) => (
          <span key={i}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default EmployeeCard;
