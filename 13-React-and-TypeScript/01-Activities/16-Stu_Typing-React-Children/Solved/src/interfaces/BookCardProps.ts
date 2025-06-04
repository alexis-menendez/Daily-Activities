import Book from "./Book";

export default interface BookCardProps {
  book: Book;
  // Since the children property of this component is a ReactElement, it can only be a JSX element or multiple JSX elements.
  children: React.ReactElement | React.ReactElement[];
}
