import { Stack } from '@/components';
import { useState } from 'react';

const API_ENDPOINT = `${
  import.meta.env.VITE_PB_API
}/api/collections/products/records?page=2&perPage=2`;

function Exercise() {
  const [products, setProducts] = useState(null);

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
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setProducts(data.items))
      .catch((error) => console.error(error));
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
