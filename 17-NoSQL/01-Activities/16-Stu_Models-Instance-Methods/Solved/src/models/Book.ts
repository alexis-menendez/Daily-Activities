import { Schema, model, Document } from 'mongoose';

// Define an interface for the Book schema
interface IBook extends Document {
  title: string;
  author?: string;
  price: number;
  getDiscount(): void;
} 

// Schemas define the shape of the documents within the collection.
const bookSchema = new Schema<IBook>({
  // Schemas define the properties of the document
  title: { type: String, required: true },
  author: String,
  price: { type: Number, required: true },
});

// Extend methods object with custom method
bookSchema.methods.getDiscount = function () {
  const discountPrice = this.price * 0.5;
  console.log(
    `The book's title is ${this.title} and the discounted price is ${discountPrice}`
  );
};

// Create model using mongoose.model()
const Book = model('Book', bookSchema);

// Create new instance of model
const discountedBook = new Book({
  title: 'Oh the Places You Will Go!',
  price: 100,
});

// Call custom method on instance
discountedBook.getDiscount();

export default Book;
