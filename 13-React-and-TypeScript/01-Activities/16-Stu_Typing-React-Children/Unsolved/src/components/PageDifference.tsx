import PageDifferenceProps from "../interfaces/PageDifferenceProps";

export default function PageDifference(props: PageDifferenceProps) {
  return (
    <div>
      <h6>Page Difference From Minimum</h6>
      <p>{props.children}</p>
    </div>
  );
}
