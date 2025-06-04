import './App.css';
import { useEffect, useState } from 'react';
import User from '../src/interfaces/User';
import Nav from './components/Nav';
import Profile from './components/Profile';


function App() {

  // Use type assertion to define the user state since know that the user object will be populated with data
  const [user, setUser] = useState<User>({} as User);

  // Use the useEffect hook to populate the user state with data on component load
  useEffect(() => {
    setUser({
      name: 'John Doe',
      email: 'john@doe.com',
      phone: '123-456-7890',
      address: '123 Main St, Anytown, CA 12345'
    });
  }, []);

  return (
    <>
      <Nav name={user.name} />
      {/* Pass the user state to the Profile component */}
      <Profile name={user.name} email={user.email} phone={user.phone} address={user.address} />
    </>
  );
}

export default App;
