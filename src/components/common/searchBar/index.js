import SearchIcon from "../../../assets/icons/search";
import "./styles.css";

function SearchBar({ onSearch }) {
  return (
    <div className="search-field">
      <div className="icon-positioning">
        <SearchIcon cn="search-icon" />
      </div>
      <form role="search">
        <label for="search" className="dn"></label>
        <input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          id="search"
          name="search"
          data-testid="search-input"
        />
      </form>
    </div>
  );
}

export default SearchBar;
