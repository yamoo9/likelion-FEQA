import pb from '@/api/pocketbase';
import { getDocumentTitle, getPbImage, numberWithComma } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useLoaderData /* , useParams */ } from 'react-router-dom';

function ProductDetailPage() {
  // const { productId } = useParams();
  const { title, color, photo, price } = useLoaderData();

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

export default ProductDetailPage;

/* -------------------------------------------------------------------------- */

export async function loader({ params }) {
  const { productId } = params;
  const product = await pb.collection('products').getOne(productId);
  product.photo = getPbImage(product);
  return product;
}
