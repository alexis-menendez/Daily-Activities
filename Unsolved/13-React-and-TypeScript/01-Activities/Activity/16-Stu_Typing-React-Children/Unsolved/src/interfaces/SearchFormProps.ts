export default interface SearchFormProps {
  searchString: string;
  pageMin: number;
  setSearchString: (searchString: string) => void; 
  setPageMin: (pageMin: number) => void; 
};
