import { useEffect } from 'react';
import UserList from '../components/Users';
//TODO: Import retrieveUsers from the userAPI

const Home = () => {
  //TODO: Set up a state to hold the user data

  useEffect(() => {
    //TODO: Call fetchUsers when the component mounts
  }, []);

  const fetchUsers = async () => {
    //TODO: Call the retrieveUsers API and update your users state
  };

  return <UserList users={users} />;
};

export default Home;
