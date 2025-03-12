import { useContext } from 'react';
import UserContext from './UserContext';

interface AlertProps {
  alertType: string;
  message: string;
  adminMessage: string;
};

function Alert(props: AlertProps) {
  const userContext = useContext(UserContext);
  return (
    <div className={`alert alert-${props.alertType || 'success'}`} role="alert">
      <p>{props.message}</p>
      <p>Logged In User: {userContext.userName}</p>
      <p>Logged In User Credentials: {userContext.userCredentials}</p>
      {userContext.userCredentials === 'Admin' && <p>{props.adminMessage}</p>}
    </div>
  );
}

export default Alert;
