import { Stack } from '@/components';
import { useState } from 'react';

let renderCount = 0;

setTimeout(() => {
  renderCount += 100;
}, 3000);

const API_ENDPOINT = `${
  import.meta.env.VITE_PB_API
}/api/collections/products/records?page=2&perPage=2`;

function Exercise() {
  const [products, setProducts] = useState(null); // null | Array<{id, name, ...}>

  // 순수하게 리액트 렌더링에 관한 코드만 사용되어야 한다.

  // 순수하지 않은 코드를 이 곳에 삽입 -------------------------------------------------

  // [1] 함수 외부의 변수 사용
  // - 함수 외부의 무언가를 이용해 마크업할 경우 예측이 어렵다.
  renderCount += 1;

  // [2] DOM 요소 접근, 조작
  // - 웹 문서(DOM)에서 버튼을 찾아서 스타일링 또는 이벤트 핸들링 하는 것은 리액트 렌더링과 관련이 없다.
  // - gsap, swiper 같이 DOM 기반 애니메이션, 캐러셀 라이브러리를 적용하려는 경우 여기에 해당된다.
  // document.querySelectorAll('.button').forEach((button) => {
  //   button.style.cssText = `
  //       color: #2481af;
  //     `;
  //   button.addEventListener('click', (e) => {
  //     const color = getComputedStyle(e.target, null).getPropertyValue('color');
  //     console.log(color);
  //   });
  // });

  // [3] 비동기 처리
  // - 지연된 시간이 지난 후 어떤 값을 변경한 경우, 리액트 렌더링과 관련이 없다.
  // setTimeout(() => {
  // renderCount += 10;
  // console.log('1초가 지나 renderCount 값이 +10 되었습니다.');
  // console.log(`renderCount = ${renderCount}`);
  // }, 1000);

  // [4] 네트워크 요청/응답
  // - 네트워크를 통해 서버에 요청하여 응답되기 까지 시간이 요구되는데
  //   리액트의 렌더링 프로세스는 동기적으로 처리되므로 렌더링과 관련이 없다.
  // const productsPromise = fetch(API_ENDPOINT);

  // console.log(productsPromise);

  // productsPromise
  // .then((response) => response.json())
  // .then((data) => renderProducts(data))
  // .catch((error) => console.error(error));

  // ---------------------------------------------------------------------------

  // 그렇다면 리액트에서 사이드 이펙트 코드는 어디에 작성해야 하는가?
  // 1. 이벤트 핸들러
  //    - 왜? 이벤트 핸들러 함수 내부에서는 사이드 이펙트 코드 처리가 가능할까?
  //    - 리액트의 렌더링과 무관하게 실행 시점이 실제 DOM에서 사용자에 의해 실행되기 때문
  // 2. 이펙트를 처리하기 위한 리액트의 빌트인 훅 : React.useEffect
  //    - 특정 시점(라이프 사이클(생명 주기) : 컴포넌트 작동 흐름)에 실행되는 콜백 함수

  // ---------------------------------------------------------------------------

  const handleEffectDomAccess = () => {
    console.log(document.querySelectorAll('.button'));

    document.querySelectorAll('.button').forEach((button) => {
      button.style.cssText = `
        color: #2481af;
      `;
      button.addEventListener('click', (e) => {
        const color = getComputedStyle(e.target, null).getPropertyValue(
          'color'
        );
        console.log(color);
      });
    });
  };

  const handleEffectNetworkReqRes = () => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setProducts(data.items))
      .catch((error) => console.error(error));
  };

  return (
    <Stack vertical className="mx-6">
      <h2 className="text-2xl mt-4">부수 효과(Side Effects)</h2>
      <p>렌더 카운트: {renderCount}</p>
      <Button
        className="button"
        renderCount={renderCount}
        onClick={handleEffectDomAccess}
      >
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

      <Button
        renderCount={products?.length}
        onClick={handleEffectNetworkReqRes}
      >
        상품 요청
      </Button>

      {products && (
        <Stack as="ul" vertical gap={12}>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </Stack>
      )}
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
