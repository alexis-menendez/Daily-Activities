import SearchFormProps from "../interfaces/SearchFormProps";

export default function SearchForm(props: SearchFormProps ){
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Search for a book"
          value={props.searchString}
          onChange={(e) => props.setSearchString(e.target.value)}
        />
        <label htmlFor="pages">Minimum Pages:*</label>
        <input
          type="number"
          className="form-control"
          placeholder="Minimum Pages"
          value={props.pageMin}
          onChange={(e) => props.setPageMin(parseInt(e.target.value))}
        />
      </div>
    </form>
  );
}
