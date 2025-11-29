import { createContext, useContext, useReducer } from "react";
import cartReducer from './../Store/cart'

const Cart = createContext();

const CartProvider = ({ children }) => {

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: []
  });

  return (
    <Cart.Provider value={{ cartState, cartDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartContext = () => {
  return useContext(Cart);
}

export default CartProvider;
