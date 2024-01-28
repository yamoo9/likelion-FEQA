import A11yHidden from '../A11yHidden/A11yHidden-v2';

function FormControl() {
  return (
    <div role="group">
      <A11yHidden as="label" htmlFor="search">
        검색어
      </A11yHidden>
      <input id="search" type="search" placeholder="검색어를 입력해주세요." />
    </div>
  );
}

export default FormControl;
