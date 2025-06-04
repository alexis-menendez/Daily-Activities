import { useState, useEffect } from 'react';
import { retrieveUsers } from '../api/userAPI';
import type { UserData } from '../interfaces/UserData';
import UserList from '../components/Users';

const Home = () => {
  // Initialize state for 'users' using useState, setting it to an empty array of type UserData.
  const [users, setUsers] = useState<UserData[]>([]);

  // useEffect hook runs once on component mount due to empty dependency array.
  // It calls fetchUsers to retrieve and set user data.
  useEffect(() => {
    fetchUsers();
  }, []);

  // Async function fetchUsers retrieves user data from an external source.
  const fetchUsers = async () => {
    // Call retrieveUsers function which asynchronously fetches user data.
    const data = await retrieveUsers();
    // Update 'users' state with the fetched data.
    setUsers(data);
  };

  return <UserList users={users} />;
};

export default Home;
