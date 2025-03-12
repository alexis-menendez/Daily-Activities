import Book from "./Book";

export default interface BookCardProps {
  book: Book;
  // TODO: How can we allow multiple children to be passed to the BookCard component?
  children: React.ReactElement;
}
