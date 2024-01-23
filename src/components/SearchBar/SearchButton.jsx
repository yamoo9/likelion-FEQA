import IconCircle from './IconCircle';

function SearchButton(/* props */) {
  return (
    <button type="submit" aria-label="검색" title="검색">
      {/* [외부에서 제어 ❌] 내부에 컴포넌트의 엘리먼트 삽입 */}
      <IconCircle />
      {/* [외부에서 제어 ✅] 외부에서 props.children으로 삽입 */}
      {/* {props.children} */}
    </button>
  );
}

export default SearchButton;
