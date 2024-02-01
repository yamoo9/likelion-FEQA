import { Stack } from '@/components';

function Exercise() {
  // 순수하게 리액트 렌더링에 관한 코드만 사용되어야 한다.

  return (
    <Stack vertical className="mx-6">
      <h2 className="text-2xl mt-4">부수 효과(Side Effects)</h2>
      <button
        type="button"
        onClick={(e) => {
          // console.log('여기서는 사이드 이펙트 코드를 작성할 수 있다.');
          // DOM 스크립트 사용 가능
          const listElement = e.target.nextElementSibling;
          const targetElement = listElement.querySelector('li:nth-child(2)');
          targetElement.setAttribute('tabindex', -1);
          targetElement.focus();
        }}
      >
        클릭
      </button>
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

export default Exercise;
