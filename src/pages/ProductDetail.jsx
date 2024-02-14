import pb from '@/api/pocketbase';
import { getDocumentTitle, getPbImage, numberWithComma } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useLoaderData /* , useParams */, useParams } from 'react-router-dom';

export function Component() {
  const { productId } = useParams();

  const productData = useLoaderData();

  const {
    data: { title, color, photo, price },
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: fetchProduct,
    initialData: productData,
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

      {/* 상품 상세 정보 */}
      <figure className="flex flex-col items-center space-y-3 w-[50vw] my-5 mx-auto border border-slate-100 p-2 bg-white shadow rounded">
        <img src={photo} alt="" />
        <figcaption className="self-start flex flex-col space-y-1">
          <p className="text-xs text-slate-600">{productTitle}</p>
          <span className="text-slate-500 text-xs font-bold">
            {numberWithComma(price)}원
          </span>
        </figcaption>
      </figure>
    </>
  );
}

Component.displayName = 'ProductDetailPage';

/* -------------------------------------------------------------------------- */

const fetchProduct = async (productId) => {
  const product = await pb.collection('products').getOne(productId);
  product.photo = getPbImage(product);
  return product;
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { productId } = params;

    const data = await queryClient.ensureQueryData({
      queryKey: ['product', productId],
      queryFn: () => fetchProduct(productId),
    });

    return data;
  };
