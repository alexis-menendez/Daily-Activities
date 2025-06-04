import { Schema, model, Document } from 'mongoose';

// TODO: Define an interface for the `bookSchema` subdocument 
interface ILibrary extends Document {
  name: string;
  books: IBook[];
  lastAccessed?: Date;
}

// TODO: Define a new schema named `bookSchema` for the subdocument

const librarySchema = new Schema<ILibrary>({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`

// TODO: Create a new instance of the model including the subdocuments

export default Library;
