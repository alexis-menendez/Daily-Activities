export interface Term {
  term: string;
  definition: string;
  url: string;
  category: string;
  relevance: number;
}

// Helper function to sort data based on key and type
const sortData = (firstKey: keyof Term, secondKey: keyof Term, type: 'asc' | 'dsc'): ((a: Term, b: Term) => number) => {
  return (a: Term, b: Term) => {
    const compare = (valueA: any, valueB: any) => {
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    };

    const compareKeys = (key: keyof Term) => {
      return type === 'asc' ? compare(a[key], b[key]) : compare(b[key], a[key]);
    };

    const compareFirstKey = compareKeys(firstKey);
    if (compareFirstKey !== 0) {
      return compareFirstKey;
    }

    return compareKeys(secondKey);
  };
};

export default sortData;
