interface Invoice {
  //An index signature tells TypeScript that, while we don't have any specific properties defined, we know that all the properties will be strings and all the values will be numbers.  This is useful when we want a more dynamic type.
  [key: string]: number;
}

export default Invoice;
