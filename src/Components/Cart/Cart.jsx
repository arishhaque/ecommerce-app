import { useContext } from "react";
import useWindowSize from "../../Hooks/useWindowSize"
import ProductCartContext from "../../Context/ProductCartContext";
import { useSelector } from "react-redux";

function Cart() {

  const cart = useSelector((state) => state.cart.items)
  const cartList = Object.values(cart);
  /* using useContext
  const productCart = useContext(ProductCartContext);
  const cartList = Object.values(productCart.cart);
  */
  // const windowSize = useWindowSize();
  let totalPrice = 0;
  if (cartList.length === 0) {
    return (
      <>
        <div>
          Cart is empty
        </div>
      </>
    )
  } else {
    return (
      <>
        <ol>
          {
            cartList.map((item) => {
              totalPrice += item.price * item.quantity;
              return <li key={item.id}><div>{item.title}, <span>quantity - {item.quantity}, </span><span>price - {item.price}</span></div></li>
            })
          }
        </ol>
        <div>Total: {totalPrice.toFixed(2)}</div>
      </ >
    )
  }
}

export default Cart;
