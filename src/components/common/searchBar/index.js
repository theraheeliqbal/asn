import SearchIcon from "../../../assets/icons/search";
import "./styles.css";

function SearchBar({ onSearch }) {
  return (
    <div class="search-field">
      <SearchIcon cn="search-icon" />
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        id="lname"
        name="lname"
      />
    </div>
  );
}

export default SearchBar;
