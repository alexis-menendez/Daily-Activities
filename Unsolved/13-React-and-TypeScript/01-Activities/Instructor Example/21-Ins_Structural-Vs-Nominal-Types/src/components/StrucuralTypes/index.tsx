import { useState } from 'react';
import './style.css';
function StructuralTypes() {
  //TypeScript uses a structural typing system, meaning if two disparate types have all the same properties, TypeScript treats them as functionally the same. In this example both `fullName` and `userName` have the type `string`, so TypeScript treats them as interchangeable
  const [fullName, setFullName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  //However, sometimes we want to assign special rules to certain strings, like for a UUID. In this case, we don't want to allow spaces in our username, so we want to ensure type safety between `fullName` and `userName`.  Nothing is preventing a user from adding spaces to their username.
  return (
    <div className='StructuralTypes'>
      <h2>Structural Types</h2>
      <form>
        <label htmlFor='structuralName'>Full Name</label>
        <input
          id='structuralName'
          type='text'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor='structuralUsername'>Username</label>
        <input
          id='structuralUsername'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
    </div>
  );
}

export default StructuralTypes;
