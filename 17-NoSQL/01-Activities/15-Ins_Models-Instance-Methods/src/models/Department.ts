import { Schema, model, Document } from 'mongoose';

interface IDepartment extends Document { 
  name: string;
  totalStock?: number;
  lastAccessed?: Date;
  getDocumentInfo(): void;
}

// Schemas define the shape of the documents within the collection.
const departmentSchema = new Schema<IDepartment>({
  name: { type: String, required: true },
  totalStock: Number,
  lastAccessed: { type: Date, default: Date.now },
});

// Schemas can also define methods that act on an instance of the model or document
// This custom method extends the methods object
departmentSchema.methods.getDocumentInfo = function () {
  // The 'this' keyword is used to specify the properties belonging to the particular instance
  console.log(
    `This department has the name ${this.name} and a total stock of ${this.totalStock}`
  );
};

// Models are constructors compiled from a schema and pass down the properties and methods to each instance
const Department = model('Department', departmentSchema);

// Instances created from a model have access to the methods and properties
const produce = new Department({ name: 'Produce', totalStock: 100 });

// Documents have access to a range of built-in instance methods like get()
const responseGetInstance = produce.get('totalStock', String);
console.log(
  `The value of the totalStock for this document in string form is ${responseGetInstance}`
);

// Instance methods are called on the document
produce.getDocumentInfo();

export default Department;
