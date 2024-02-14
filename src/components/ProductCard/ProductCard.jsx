import { Link } from 'react-router-dom';
import { shape, string, number } from 'prop-types';

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

export default ProductCard;
