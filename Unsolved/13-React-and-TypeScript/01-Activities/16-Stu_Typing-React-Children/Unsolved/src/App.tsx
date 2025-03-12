import { useState } from 'react';
import './App.css';
import bookData from './data/bookData';
import Book from './interfaces/Book'
import BookCard from './components/BookCard';
import SearchForm from './components/SearchForm';
import PageDifference from './components/PageDifference';

function App() {
const [books] = useState<Book[]>(bookData);
const [pageMin, setPageMin] = useState<number>(0);
const [searchString, setSearchString] = useState<string>('');

return (
  <>
    <div>
      <SearchForm
        pageMin={pageMin}
        setPageMin={setPageMin}
        searchString={searchString}
        setSearchString={setSearchString}
      />
    </div>
    <div>
      {
        books.map((book, index) => {
          if (book.pages >= pageMin && book.title.toLowerCase().includes(searchString.toLowerCase())) {
            return (
              <BookCard key={index} book={book}>
                <PageDifference>
                  {book.pages - pageMin}
                </PageDifference>
                <button className="btn btn-primary m-1">Add to Cart</button>
                <button className="btn btn-danger m-1">Remove</button>
              </BookCard>
            );
          }
          return null;
        })
      }
    </div>
  </>
);

}

export default App
