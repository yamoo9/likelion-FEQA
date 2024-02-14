import { Helmet } from 'react-helmet-async';
import { shape, string, number } from 'prop-types';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { getDocumentTitle, getPbImage } from '@/utils';
import pb from '@/api/pocketbase';

function FetchingDataPage() {
  const productsData = useLoaderData();
  // console.log(productsData);

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
        {productsData.items?.map((product) => {
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

export default FetchingDataPage;

// 비동기 요청 (GET)
export async function loader() {
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
}

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

/* -------------------------------------------------------------------------- */

function ProductCard({ product, options }) {
  const styles = {
    width: options.size,
    filter: options.filter,
  };

  // const slug = `${getSlug(product.title)}/color/${getSlug(product.color)}`;

  return (
    <li className="shadow-lg flex flex-col space-y-1 p-2 border border-stone-200 bg-white">
      {/* <Link to={`/product/${slug}`}> */}
      <Link to={`/product/${product.id}`}>
        <h4 className="order-1 mt-1 mb-3">
          {product.title} ({product.color})
        </h4>
        <img
          src={product.photo}
          className="w-[600px] h-auto aspect-auto border border-slate-200"
          style={styles}
          alt=""
        />
      </Link>
    </li>
  );
}

ProductCard.propTypes = {
  product: shape({
    id: string,
    collectionId: string,
    title: string,
    color: string,
    photo: string,
    price: number,
  }),
  options: shape({
    size: string,
    filter: string,
  }),
};
