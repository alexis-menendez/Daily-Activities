import { createContext } from 'react';

interface UserContextInfo {
  userName: string,
  userCredentials: 'Guest' | 'User' | 'Admin';
};

const UserContext = createContext<UserContextInfo>({ userName: 'Guest', userCredentials: 'Guest' });

export default UserContext;
