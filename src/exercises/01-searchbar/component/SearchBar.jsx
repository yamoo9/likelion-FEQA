import './SearchBar.css';

// 리액트 함수 컴포넌트 무조건 첫번째 인수로 props 객체를 전달 받는다.
function SearchBar(props) {
  console.log(props);

  return (
    <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
      <p>{props.student}</p>
      <div className="searchBarGroup" role="group">
        {/* {renderIconNaver()} */}
        {/* {renderFormControl()} */}
      </div>
      {/* {renderSearchButton()} */}
    </form>
  );
}

export default SearchBar;
