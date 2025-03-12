type AlertProps = {
  alertType: string;
  message: string;
};

function Alert2(props: AlertProps) {
  return (
    <div className={`alert alert-${props.alertType || 'success'}`} role="alert">
      {props.message}
    </div>
  );
}

export default Alert2;
