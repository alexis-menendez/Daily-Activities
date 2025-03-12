export default interface Employee {
  //`readonly` properties cannot have their value changed once assigned.  This is similar to the `const` keyword in javaScript
  readonly id: string;
  readonly fullName: string;
  readonly userName: string;
  readonly salary: number;
  //the `readonly` keyword does NOT prevent changes to keys within an object.  If you want to make the object keys `readonly`, the keys themselves must be marked so.
  readonly location: {
    city: string;
    state: string;
  };
  // the `readonly` keyword` only prevents use of the assignment operator. Arrays can still have their individual properties modified or more items added.  To prevent this, arrays can also be defined as `readonly`, in which case TypeScript with throw an error if any entry is modified, deleted, or if a new entry is added.
  readonly skills: readonly string[];
}
