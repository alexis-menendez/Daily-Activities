import React, { createContext, useState } from 'react';

// Create a new context for managing the isLoggedIn and the functions that work with it.
export const AuthContext = createContext();

// The AuthProvider component manages the isLoggedIn state for the application.
export const AuthProvider = ({ children }) => {
  // Define a state variable 'isLoggedIn' with an initial value of false.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to log in
  const login = () => {
    setIsLoggedIn(true);
  };

  // Function to log out
  const logout = () => {
    setIsLoggedIn(false);
  };

  // Provide the isLoggedIn state and functions to the context.
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
