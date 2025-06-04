import NavProps from "../interfaces/NavProps";

export default function Nav(props: NavProps) {
  return (
    <nav>
      <ul>
        <li>{`Welcome ${props.name ? props.name.split(" ")[0] : ""}`}</li>
      </ul>
    </nav>
  )
}
