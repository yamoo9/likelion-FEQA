import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';
import { getDocumentTitle, getPbImage, numberWithComma } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import pb from '@/api/pocketbase';

export function Component() {
  const { productId } = useParams();
  const product = useLoaderData();

  const {
    data: { title, color, photo, price },
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: fetchSingleProduct,
    initialData: product,
  });

  // useState
  // useEffect
  // useRef

  // vs.

  // react router v6.4+ ✅
  // loader async function

  const productTitle = `${title} (${color})`;
  const productDescription = `${productTitle} 상품은 .....`;

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(productTitle)}</title>
        <meta name="description" content={productDescription} />
      </Helmet>

      <h2 className="my-5">{productTitle}</h2>
      {/* 상품 상세 정보 */}
      <figure>
        <img src={photo} alt="" />
        <figcaption>
          <p>{productTitle}</p>
          <span className="price">{numberWithComma(price)}원</span>
        </figcaption>
      </figure>
    </>
  );
}

Component.displayName = 'ProductDetailPage';

/* -------------------------------------------------------------------------- */

async function fetchSingleProduct(productId) {
  const product = await pb.collection('products').getOne(productId);
  product.photo = getPbImage(product);
  return product;
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { productId } = params;
    return await queryClient.ensureQueryData({
      queryKey: ['product', productId],
      queryFn: () => fetchSingleProduct(productId),
      staleTime: 1000 * 10, // 10s
    });
  };
