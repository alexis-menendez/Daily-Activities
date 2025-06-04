import { Router, Request, Response } from 'express';
import { Book } from '../../models/index.js';

export const getAllBooks = async (_req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllPaperbackBooks = async (_req: Request, res: Response) => {
  try {
    const users = await Book.findAll({
      // Order by title in ascending order
      order: ['title'],
      where: {
        // Only get books that have this boolean set to TRUE
        is_paperback: true
      },
      attributes: {
        // Don't include these fields in the returned data
        exclude: ['is_paperback', 'edition']
      }
    });
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /Books/:id
export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /Books
export const createBook = async (req: Request, res: Response) => {
  const { title, author, isbn, pages, edition, is_paperback } = req.body;
  try {
    const newBook = await Book.create({ title, author, isbn, pages, edition, is_paperback });
    res.status(201).json(newBook);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /Books/:id
export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author, isbn, pages, edition, is_paperback } = req.body;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      book.title = title;
      book.author = author;
      book.isbn = isbn;
      book.pages = pages;
      book.edition = edition;
      book.is_paperback = is_paperback;
      await book.save();
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /Books/:id
export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      await book.destroy();
      res.json({ message: 'Book deleted' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /Books/Seed
export const createBooks = async (_req: Request, res: Response) => {
  try {
    // Multiple rows can be created with `bulkCreate()` and an array
    // This could also be moved to a separate Node.js script to ensure it only happens once
    Book.bulkCreate([
      {
        title: 'Make It Stick: The Science of Successful Learning',
        author: 'Peter Brown',
        isbn: '978-0674729018',
        pages: 336,
        edition: 1,
        is_paperback: false
      },
      {
        title: 'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
        author: 'Kenneth Rubin',
        isbn: '978-0137043293',
        pages: 500,
        edition: 1,
        is_paperback: true
      },
      {
        title: "White Fragility: Why It's So Hard for White People to Talk About Racism",
        author: 'Robin DiAngelo',
        isbn: '978-0807047415',
        pages: 192,
        edition: 2,
        is_paperback: true
      },
      {
        title: 'The Pragmatic Programmer: Your Journey To Mastery',
        author: 'David Thomas',
        isbn: '978-0135957059',
        pages: 352,
        edition: 2,
        is_paperback: false
      },
      {
        title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
        author: 'Donald Knuth',
        isbn: '978-0201896831',
        pages: 672,
        edition: 3,
        is_paperback: false
      },
      {
        title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
        author: 'Safiya Umoja Noble',
        isbn: '978-1479837243',
        pages: 256,
        edition: 1,
        is_paperback: true
      }
    ])
      res.status(200).json({ message: 'Book data seeded.' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

const router = Router();

// GET /books - Get all books
router.get('/', getAllBooks);

// GET /books/paperbacks - Get all paperback books
router.get('/paperbacks', getAllPaperbackBooks);

// GET a single book
router.get('/:id', getBookById);

// POST /books - Create a new book
router.post('/', createBook);

// PUT /book/:id - Update a book by id
router.put('/:id', updateBook);

// DELETE /book/:id - Delete a book by id
router.delete('/:id', deleteBook);

// POST /books/seed - Create multiple books
router.post('/seed', createBooks);

export { router as bookRouter };
