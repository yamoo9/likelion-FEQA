import { Helmet } from 'react-helmet-async';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import { getDocumentTitle, getPbImage } from '@/utils';
import { ProductCard } from '@/components';
import pb from '@/api/pocketbase';
import { useQuery } from '@tanstack/react-query';

export function Component() {
  // 로더(loader)에서 가져온 캐싱된 데이터 (초기 데이터)
  const productsData = useLoaderData();

  // 쿼리 구독을 위한 useQuery 훅
  // 캐싱된 데이터를 초기 데이터로 사용
  const { data: cachedProductsData } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProduct,
    initialData: productsData,
    staleTime: 1000 * 30,
  });

  const [searchParams] = useSearchParams();

  // URLSearchParams 객체 순환
  // for (const [key, value] of searchParams) {
  //   console.log(key, typeof value)
  // }

  const productOptions = {
    size: searchParams.get('size'),
    filter: searchParams.get('filter'),
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('데이터 가져오기')}</title>
        <meta
          name="description"
          content="리액트 라우터의 새로운 API를 사용해 컴포넌트에 데이터를 공급하여 렌더링 할 수 있습니다."
        />
      </Helmet>
      <h2 className="my-5">데이터 가져오기</h2>
      <ul className="flex flex-col gap-2 items-center my-5">
        {cachedProductsData.items?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              options={productOptions}
            />
          );
        })}
      </ul>
    </>
  );
}

Component.displayName = 'FetchingDataPage';

// 비동기 요청 (GET)
const fetchProduct = async () => {
  const products = await pb.collection('products').getList();

  // 뮤테이션(mutation)
  const productItems = products.items.map((product) => {
    const photoURL = getPbImage(product);
    product.photo = photoURL;
    return product;
  });

  return {
    ...products,
    items: productItems,
  };
};

export const loader = (queryClient) => async () => {
  return await queryClient.ensureQueryData({
    // 쿼리 고유 키 : 이 값이 변경되면 다시 서버에서 데이터를 가져옵니다.
    queryKey: ['products'],
    // 쿼리 함수 : 설정된 함수를 사용해 서버에서 데이터를 가져옵니다.
    queryFn: fetchProduct,
    // 스태일 타임 : 가져온 데이터가 설정된 시간을 넘긴 경우 다시 서버에서 데이터를 가져옵니다.
    // staleTime: 10000, // 10s
  });
};

// 비동기 요청 (POST, PUT(PATCH), DELETE)
// React Router's <Form></Form>
export async function action({ request }) {
  switch (request.method) {
    case 'POST':
      // PocketBase : Create Record
      break;
    case 'PUT':
      // PocketBase : Edit Record
      break;
    case 'DELETE':
      // PocketBase : Delete Record
      break;
  }
}
