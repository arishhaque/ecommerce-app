import { createContext } from "react";

const ProductCartContext = createContext({
  cart: {},
  increaseQuantity: () => { },
  decreaseQuantity: () => { }
});

export default ProductCartContext;
