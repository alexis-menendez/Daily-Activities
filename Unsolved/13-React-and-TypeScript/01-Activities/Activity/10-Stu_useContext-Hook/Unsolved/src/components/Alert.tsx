// TODO: Integrate the `WeatherContext` component into the `Alert` component below.
// Each `Alert` component should display each of the `WeatherContext` fields.

interface AlertProps {
  alertType: string;
  message: string;
  adminMessage: string;
};

function Alert(props: AlertProps) {
  return (
    <div className={`alert alert-${props.alertType || 'success'}`} role="alert">
      <p>{props.message}</p>
    </div>
  );
}

export default Alert;
