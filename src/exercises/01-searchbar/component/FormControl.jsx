function FormControl() {
  return (
    <div role="group">
      <label htmlFor="search" className="sr-only">
        검색어
      </label>
      <input id="search" type="search" placeholder="검색어를 입력해주세요." />
    </div>
  );
}

export default FormControl;