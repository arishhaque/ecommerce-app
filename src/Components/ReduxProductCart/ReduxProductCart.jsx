import { useDispatch, useSelector } from "react-redux";

function ReduxProductCart({ product }) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.items[product.id]?.quantity || 0);

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
