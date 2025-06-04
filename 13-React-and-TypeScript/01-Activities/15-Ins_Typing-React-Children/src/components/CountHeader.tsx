import ReactElementProps from "../interfaces/ReactElementProps";

export default function CountHeader(props: ReactElementProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}
