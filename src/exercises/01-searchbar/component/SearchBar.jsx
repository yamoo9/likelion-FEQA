import './SearchBar.css';

function SearchBar() {
  return (
    <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
      <div className="searchBarGroup" role="group">
        {/* {renderIconNaver()} */}
        {/* {renderFormControl()} */}
      </div>
      {/* {renderSearchButton()} */}
    </form>
  );
}

export default SearchBar;