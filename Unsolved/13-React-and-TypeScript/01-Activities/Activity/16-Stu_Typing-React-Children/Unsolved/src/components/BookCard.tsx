import BookCardProps from '../interfaces/BookCardProps';

export default function BookCard(props: BookCardProps) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.book.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.book.author}</h6>
        <p className="card-text">{props.book.pages} pages</p>
        {props.children}
      </div>
    </div>
  );
}
