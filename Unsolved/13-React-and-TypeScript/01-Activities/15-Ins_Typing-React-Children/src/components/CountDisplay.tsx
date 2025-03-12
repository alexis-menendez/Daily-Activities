import ReactNodeProps from "../interfaces/ReactNodeProps"

export default function CountDisplay(props: ReactNodeProps) {
  return <p>{props.children}</p>
}
