// Import schema and model from mongoose
import { Schema, model, Document } from 'mongoose';

// Define an interface for the Book document
interface IBook extends Document {
  title: string;
  author?: string;
  publisher?: string;
  stockCount?: number;
  price?: number;
  inStock?: boolean;
  lastAccessed: Date;
}

// Construct a new instance of the schema class
const bookSchema = new Schema<IBook>({
  // Configure individual properties using Schema Types
  title: { type: String, required: true },
  author: { type: String, required: false },
  // The type of data is set to 'String' and required is set to false, meaning it will accept null values
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  // Use built in date method to get current date
  lastAccessed: { type: Date, default: Date.now },
});

// Using model() to compile a model based on the schema 'bookSchema'
const Book = model('Book', bookSchema);

// Create a new instance of the model, a document
Book
  .create({
    title: 'Diary of Anne Frank',
    author: 'Anne Frank',
    publisher: 'Scholastic',
    stockCount: 10,
    price: 10,
    inStock: true,
  })
  .then(result => console.log('Created new document', result))
  .catch(err => console.log(err));

// Create a new instance with required title and optional author properties
Book
  .create({
    title: 'Oh the Places You Will Go!',
    author: 'Dr. Seuss'
  })
  .then(result => console.log('Created new document', result))
  .catch(err => console.log(err));

// Create a new instance with only required title
Book
.create({ title: 'Harold and the Purple Crayon' })
  .then(result => console.log('Created new document', result))
  .catch(err => console.log(err));

export default Book;
