import { useContext } from "react";
import ProductCartContext from "../../Context/ProductCartContext";

function ProductCart({ product }) {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(ProductCartContext);

  function addQuantity() {
    increaseQuantity(product);
  }

  function reduceQuantity() {
    decreaseQuantity(product);
  }

  let quantity = cart[product.id] ? cart[product.id].quantity : 0;
  if (quantity > 0) {
    return (
      <div>
        <button onClick={addQuantity}>+</button>
        <span> {quantity} </span>
        <button onClick={reduceQuantity}>-</button>
      </div>
    )
  } else {
    return (
      <button onClick={addQuantity}>Add to Cart</button>
    )
  }
}

export default ProductCart;
