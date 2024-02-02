import { Stack } from '@/components';

let renderCount = 0;

function Exercise() {
  // 순수하게 리액트 렌더링에 관한 코드만 사용되어야 한다.

  // 순수하지 않은 코드를 이 곳에 삽입
  renderCount += 1; // 1

  return (
    <Stack vertical className="mx-6">
      <h2 className="text-2xl mt-4">부수 효과(Side Effects)</h2>
      <Button renderCount={renderCount}>순수 함수</Button>
      <Button renderCount={renderCount}>부수 효과</Button>
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

function Button({ renderCount, children, ...restProps }) {
  return (
    <button type="button" {...restProps}>
      {children} ({renderCount})
    </button>
  );
}

export default Exercise;
