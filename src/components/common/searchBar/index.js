import SearchIcon from "../../../assets/icons/search";
import "./styles.css";

function SearchBar({ onSearch }) {
  return (
    <div className="search-field">
      <SearchIcon cn="search-icon" />
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        id="search"
        name="search"
        data-testid="email-input"
      />
    </div>
  );
}

export default SearchBar;
