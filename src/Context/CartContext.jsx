import { createContext, useContext, useReducer } from "react";
import cartReducer from './../Store/cart'
import filtersReducer from '../Store/filters'

const Cart = createContext();

const CartProvider = ({ children }) => {

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: []
  });

  const [filtersState, filtersDispatch] = useReducer(filtersReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: ""
  });

  return (
    <Cart.Provider value={{ cartState, cartDispatch, filtersState, filtersDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartContext = () => {
  return useContext(Cart);
}

export default CartProvider;
