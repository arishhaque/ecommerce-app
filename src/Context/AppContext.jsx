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
