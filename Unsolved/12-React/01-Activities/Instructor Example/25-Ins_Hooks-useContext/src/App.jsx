// We import useContext to have access to the context.
import { useContext } from 'react';

// We import the AuthContext so we can use the isLoggedIn state and the login and logout functions.
import { AuthContext } from './components/AuthContext';

function App() {
  // The useContext hook gets us the isLoggedIn state and the functions that work with it.
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  // Render a button to log in or out based on the isLoggedIn state
  return (
    <div className="app light">
      <div className="message-button-container">
        {isLoggedIn
          ? (
            <>
              <h1>Welcome back!</h1>
              <button onClick={logout}>Logout</button>
            </>
          )
          : (
            <>
              <h1>Please log in to continue.</h1>
              <button onClick={login}>Login</button>
            </>
          )
        }
      </div>
    </div>
  );
}

export default App;
