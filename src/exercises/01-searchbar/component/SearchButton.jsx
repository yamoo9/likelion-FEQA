function SearchButton(props) {
  return (
    <button type="submit" aria-label="검색" title="검색">
      {/* {renderIconCircle()} */}
      {props.children}
    </button>
  );
}

export default SearchButton;
