import User from "../interfaces/User"

export default function Profile(props: User) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.address}</p>
    </div>
  )
}
