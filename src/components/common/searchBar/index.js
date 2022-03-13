import SearchIcon from "../../../assets/icons/search";
import "./styles.css";

function SearchBar({ onSearch }) {
  return (
    <div className="search-field">
      <SearchIcon cn="search-icon" />
      <label for="search-input-field" class="dn">
        Search:{" "}
      </label>
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        id="search-input-field"
        name="lname"
      />
    </div>
  );
}

export default SearchBar;
