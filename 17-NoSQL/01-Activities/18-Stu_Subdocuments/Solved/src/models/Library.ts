import { Schema, model, Document } from 'mongoose';

interface IBook extends Document {
  title: string;
  price?: number;
}

interface ILibrary extends Document {
  name: string;
  books: IBook[];
  lastAccessed?: Date;
}


// Child documents or subdocuments can be embedded into a parent document
// The bookSchema defines the schema of the subdocument
const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  price: Number,
});

// The librarySchema defines the schema of the parent document
const librarySchema = new Schema<ILibrary>({
  name: { type: String, required: true },
  // This will include an array that holds all the books
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// Uses mongoose.model() to create model
const Library = model('Library', librarySchema);

// Uses model to create new instance including subdocument
const bookData = [
  { title: 'Diary of Anne Frank', price: 10 },
  { title: 'One Thousand Years of Solitude', price: 20 },
  { title: 'History of Hogwarts', price: 5 },
];

Library
  .create({ name: 'Books', books: bookData })
  .then(data => console.log(data))
  .catch(err => console.log(err));

export default Library;
