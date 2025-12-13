/* App Context is an additional layer of abstraction, making it easier to access and manipulate state across components.
exposes the Redux store through the AppContext, to provide a unified API for accessing state and dispatching actions across your application. Mainly, Decoupling components from Redux:

** This is not used when we use redux hooks - useSelector and useDispatch. **

import { createContext, useContext, useReducer } from "react";
import cartReducer from './../Store/cart'
import filtersReducer from '../Store/filters'

const Context = createContext();

const AppContextProvider = ({ children }) => {

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
    <Context.Provider value={{ cartState, cartDispatch, filtersState, filtersDispatch }}>
      {children}
    </Context.Provider>
  );
};

export const AppContext = () => {
  return useContext(Context);
}

export default AppContextProvider;
*/

/*
// Using only `useContext`
import React from "react";
import { useContext } from "react";
import cartReducer from './../Store/cart'
import filtersReducer from '../Store/filters'

const Context = createContext();

const CartContext = () => {
  const [cartState, cartDispatch] = useContext(cartReducer);

  return (
    <>
    </>
  );
};

export default CartContext;
*/
