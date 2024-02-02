import { Stack } from '@/components';

function Exercise() {
  // 순수하게 리액트 렌더링에 관한 코드만 사용되어야 한다.

  // 순수하지 않은 코드를 이 곳에 삽입
  // 웹 문서(DOM)에서 버튼을 찾아서 스타일링 또는 클릭 핸들링을 한다.
  const buttonElements = document.querySelectorAll('.button');

  buttonElements.forEach((button) => {
    button.style.cssText = `
      color: #14a256;
    `;
    button.addEventListener('click', (e) => {
      const color = getComputedStyle(e.target, null).getPropertyValue('color');
      console.log(color);
    });
  });

  return (
    <Stack vertical className="mx-6">
      <h2 className="text-2xl mt-4">부수 효과(Side Effects)</h2>
      <Button className="button">순수 함수</Button>
      <Button className="button">부수 효과</Button>
      <ul>
        <li>
          리액트의 컴포넌트는 [ <strong>순수</strong> ] 해야 한다.
        </li>
        <li>리액트 컴포넌트는 오직 렌더링 프로세스에만 관여해야 한다.</li>
        <li>
          리액트 컴포넌트 함수 내부에는 순수하게 렌더링에만 관여하는 코드가
          사용되어야 한다.
        </li>
      </ul>
    </Stack>
  );
}

function Button({ children, ...restProps }) {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}

export default Exercise;
