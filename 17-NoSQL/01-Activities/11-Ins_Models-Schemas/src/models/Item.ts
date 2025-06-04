// Define Mongoose
import { Schema, model, Document } from 'mongoose';

// Define an interface for the Item document
interface IItem extends Document {
  item: string;
  stockCount: number;
  price: number;
  inStock: boolean;
  lastAccessed: Date;
}

// Create a new instance of the Mongoose schema to define shape of each document
const grocerySchema = new Schema<IItem>({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  item: { type: String, required: true },
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  // Use built in date method to get current date
  lastAccessed: { type: Date, default: Date.now },
});

// Using model() to compile a model based on the schema
// 'Item' is the name of the model
// grocerySchema is the name of the schema we are using to create a new instance of the model
const Item = model('Item', grocerySchema);

// We use the model to create individual documents that have the properties as defined in our schema
Item
  .create({
    item: 'banana',
    stockCount: 10,
    price: 1,
    inStock: true,
  })
  .then(result => console.log('Created new document', result))
  .catch(err => console.log(err));

export default Item;
