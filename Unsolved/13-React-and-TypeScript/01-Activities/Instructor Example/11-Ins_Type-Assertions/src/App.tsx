import './App.css';
import { useEffect, useState } from 'react';

function App() {

  interface User {
    name: string;
    email: string;
  }

  interface Address {
    street: string;
    city: string;
    state: string;
    zip: number;
  }

  const [user, setUser] = useState<User>({} as User);
  const [address, setAddress] = useState<Address>({} as Address);

  useEffect(() => {
    setUser({
      name: 'John Doe',
      email: 'john@doe.com'
    });
    setAddress({
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: 12345
    });
  }, [])

  return (
    <>
      <div>
        <h2>Welcome {user.name}!</h2>
        <p>Your email is {user.email}</p>
      </div>
      <div>
        <h2>Your Address:</h2>
        <p>{`${address.street}, ${address.city}, ${address.state} ${address.zip}`}</p>
      </div>
    </>
  )
}

export default App;
