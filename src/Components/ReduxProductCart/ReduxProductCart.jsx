import "./ReduxProductCart.css"
import { useDispatch, useSelector } from "react-redux";

function ReduxProductCart({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const cartProduct = cart[product.id];
  const quantity = cartProduct ? cartProduct.quantity : 0;

  function addQuantity() {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  function reduceQuantity() {
    dispatch({ type: "REMOVE_FROM_CART", payload: product })
  }

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

export default ReduxProductCart;
