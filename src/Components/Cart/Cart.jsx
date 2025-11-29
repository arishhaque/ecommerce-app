
import './Cart.css'
import { useSelector } from "react-redux"

function Cart() {
  const cartState = useSelector((state) => state.cart)
  const cart = cartState.cart;
  let totalPrice = 0;
  if (cart.length === 0) {
    return (
      <>
        <div>
          <h1>Cart is empty </h1>
        </div>
      </>
    )
  } else {

    Object.keys(cart).forEach((k) => {
      totalPrice += cart[k].price
    });

    return (
      <>
        <h1>My Cart</h1>
        <div className="cart-container">
          <ol>
            {
              Object.keys(cart).map((k) => {
                const item = cart[k];
                return <li className="cart-item" key={item.id}><div className="cart-item-title">{item.title}, <span className="cart-item-quantity">quantity: {item.quantity}, </span>
                  <span className="cart-item-price">price: {item.price}</span></div></li>
              })
            }
          </ol>
          <div className="cart-total-price">Total: {totalPrice.toFixed(2)}</div>
        </div>
      </>
    )
  }
}

export default Cart;
