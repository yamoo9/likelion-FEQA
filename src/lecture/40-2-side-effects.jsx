import { Stack } from '@/components';
import { useState, useEffect, useId } from 'react';

const API_ENDPOINT = `${
  import.meta.env.VITE_PB_API
}/api/collections/products/records?page=2&perPage=2`;

// 그렇다면 리액트에서 사이드 이펙트 코드는 어디에 작성해야 하는가?
// - [x] 이벤트 핸들러
//       - 왜? 이벤트 핸들러 함수 내부에서는 사이드 이펙트 코드 처리가 가능할까?
//       - 리액트의 렌더링과 무관하게 실행 시점이 실제 DOM에서 사용자에 의해 실행되기 때문
// - [x] 이펙트를 처리하기 위한 리액트의 빌트인 훅 : React.useEffect
//       - 특정 시점(라이프 사이클(생명 주기) : 컴포넌트 작동 흐름)에 실행되는 콜백 함수

// let mounted = false;

function Exercise() {
  // 로컬 스토리지 데이터 읽기 -> 컴포넌트 상태로 관리
  // 로컬 스토리지에서 데이터를 읽거나 쓰는 건 비동기!
  // ❌
  // const username = localStorage.getItem('username');
  // const [uname] = useState(username);

  // ✅
  const [username] = useState(() => {
    const username = localStorage.getItem('username');
    return username;
  });

  console.log(username);

  // 관심사의 분리
  // 상태
  const [products, setProducts] = useState(null);

  // 사이드 이펙트 관리
  // useEffect(setup/* effect (callback) function */, /* dependencies? (array) */);

  // 규칙 1. 훅 함수는 함수 컴포넌트 또는 use로 시작하는 함수(사용자 정의 훅 함수)에서만 사용 가능
  // 규칙 2. 훅 함수는 컴포넌트 내부에 사용된 문, 중첩된 함수 내부에서 사용할 없음
  // if (!mounted) {
  useEffect(
    () => {
      // 컴포넌트 렌더 → DOM 커밋 (이 시점에 콜백 함수 실행)
      // console.log('mounted');

      // DOM 접근/조작
      // 문서의 제목을 제 맘대로 변경!!!
      document.title = '우리 모두 갸루피스~~ 😀';

      // 비동기 처리
      setTimeout(() => {
        document.title = '너와 난 몰리~~ 😳';
      }, 2000);

      // mounted = true;
    },
    [] /* 최초 1회 렌더링 될 때만 셋업 함수 실행 */
  );
  // }

  const productsCount = products?.length;

  const handleEffectDomAccess = () => {
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
    requestProducts();
  };

  const requestProducts = () => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setProducts(data.items))
      .catch((error) => console.error(error));
  };

  const displayCheckId = useId();
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => {
    setIsShow((s) => !s);
  };

  return (
    <Stack vertical className="mx-6">
      <h2 className="text-2xl mt-4">부수 효과(Side Effects)</h2>
      <Button
        className="button"
        count={productsCount}
        onClick={handleEffectDomAccess}
      >
        순수 함수
      </Button>
      <Button className="button" count={productsCount}>
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

      <Button count={productsCount} onClick={handleEffectNetworkReqRes}>
        상품 요청
      </Button>

      {products && (
        <Stack as="ul" vertical gap={12}>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </Stack>
      )}

      <Stack vertical gap={6} my={20}>
        <Stack>
          <input
            type="checkbox"
            id={displayCheckId}
            checked={isShow}
            onChange={handleToggle}
          />
          <label htmlFor={displayCheckId}>
            {isShow ? '메시지 감춤' : '메시지 표시'}
          </label>
        </Stack>
        {isShow && <Message message="클린업(정리: cleanup)이 중요하다!" />}
      </Stack>
    </Stack>
  );
}

function Message({ message }) {
  useEffect(() => {
    const handleMove = (e) => {
      console.log({ x: e.clientX, y: e.clientY });
    };

    // 이벤트 청취(구독)
    globalThis.addEventListener('mousemove', handleMove);

    // 이벤트 청취 해제(구독 취소)
    return function cleanup() {
      globalThis.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return <p>{message}</p>;
}

function Button({ renderCount = 0, children, ...restProps }) {
  return (
    <button type="button" {...restProps}>
      {children} ({renderCount})
    </button>
  );
}

export default Exercise;
