import "./ProductCard.css"
import ProductCart from '../ProductCart';
import Rating from '../ProductRating';
import ReduxProductCart from '../ReduxProductCart';

function ProductCard({ product }) {
  return (
    <div className="products">
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <Rating rating={product.rating.rate} maxRating={5} size={1} />
      {/* <ProductCart product={product} /> */}
      <ReduxProductCart product={product} />
    </div>
  )
}

export default ProductCard;
