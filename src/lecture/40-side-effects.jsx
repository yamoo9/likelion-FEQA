import { Stack } from '@/components';

let renderCount = 0;

function Exercise() {
  // 순수하게 리액트 렌더링에 관한 코드만 사용되어야 한다.

  // 순수하지 않은 코드를 이 곳에 삽입 -------------------------------------------------

  // [1] 함수 외부의 변수 사용
  // - 함수 외부의 무언가를 이용해 마크업할 경우 예측이 어렵다.
  renderCount += 1;

  // [2] DOM 요소 접근, 조작
  // - 웹 문서(DOM)에서 버튼을 찾아서 스타일링 또는 이벤트 핸들링 하는 것은 리액트 렌더링과 관련이 없다.
  document.querySelectorAll('.button').forEach((button) => {
    button.style.cssText = `
        color: #2481af;
      `;
    button.addEventListener('click', (e) => {
      const color = getComputedStyle(e.target, null).getPropertyValue('color');
      console.log(color);
    });
  });

  // [3] 비동기 처리
  // - 지연된 시간이 지난 후 어떤 값을 변경한 경우, 리액트 렌더링과 관련이 없다.
  setTimeout(() => {
    renderCount += 10;
    // console.log('1초가 지나 renderCount 값이 +10 되었습니다.');
    // console.log(`renderCount = ${renderCount}`);
  }, 1000);

  // [4] 네트워크 요청/응답
  // - 네트워크를 통해 서버에 요청하여 응답되기 까지 시간이 요구되는데
  //   리액트의 렌더링 프로세스는 동기적으로 처리되므로 렌더링과 관련이 없다.
  const productsPromise = fetch(
    `${
      import.meta.env.VITE_PB_API
    }/api/collections/products/records?page=2&perPage=2`
  );

  console.log(productsPromise);

  // productsPromise
  // .then((response) => response.json())
  // .then((data) => renderProducts(data))
  // .catch((error) => console.error(error));

  // ---------------------------------------------------------------------------

  return (
    <Stack vertical className="mx-6">
      <h2 className="text-2xl mt-4">부수 효과(Side Effects)</h2>
      <p>렌더 카운트: {renderCount}</p>
      <Button className="button" renderCount={renderCount}>
        순수 함수
      </Button>
      <Button className="button" renderCount={renderCount}>
        부수 효과
      </Button>
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

function Button({ renderCount = 0, children, ...restProps }) {
  return (
    <button type="button" {...restProps}>
      {children} ({renderCount})
    </button>
  );
}

export default Exercise;
