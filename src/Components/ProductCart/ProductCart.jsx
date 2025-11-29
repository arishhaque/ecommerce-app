import './ProductCart.css'
import { CartContext } from "../../Context/CartContext";

function ProductCart({ product }) {
  const { cart, setCart } = CartContext();

  function addQuantity() {
    let itemExist = cart.some((item) => item.id === product.id);
    if (itemExist) {
      setCart((prevCart) => prevCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : { ...item }));
    } else {
      setCart((prevCart) => [ ...prevCart, { ...product, quantity: 1 }]);
    }
  }

  function reduceQuantity() {
    let currentItem = cart.find((item) => item.id === product.id);
    if (currentItem && currentItem.quantity === 1) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    }else if (currentItem) {
      setCart((prevCart) => prevCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : { ...item }));
    }
  }

  let itemQuantity = 0;
  cart.forEach((item) => itemQuantity += item.id === product.id ? item.quantity : 0);
  if (itemQuantity > 0) {
    return (
      <div>
        <button onClick={addQuantity}>+</button>
        <span> {itemQuantity} </span>
        <button onClick={reduceQuantity}>-</button>
      </div>
    )
  } else {
    return (
      <button className="add-cart-btn" onClick={addQuantity}>Add to Cart</button>
    )
  }
}

export default ProductCart;
