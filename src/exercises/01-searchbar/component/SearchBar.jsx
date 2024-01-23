import './SearchBar.css';
import IconNaver from './IconNaver';
import FormControl from './FormControl';
import SearchButton from './SearchButton';

// 일반 함수
// - 항상 JSX를 반환할 필요가 없다.
// - 항상 첫번째 인수로 props를 전달 받지 않는다.

// 함수 컴포넌트 (in 리액트)
// - 항상 JSX를 반환한다.
// - 항상 첫번째 인수로 props를 전달 받는다.

// 리액트 함수 컴포넌트 무조건 첫번째 인수로 props 객체를 전달 받는다.
function SearchBar() {
  return (
    <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
      <div className="searchBarGroup" role="group">
        <IconNaver />
        <FormControl />
      </div>
      <SearchButton />
    </form>
  );
}

export default SearchBar;
