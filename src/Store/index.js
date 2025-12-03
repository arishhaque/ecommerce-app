import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "./cart";
import filtersReducer from "./filters";
import categoriesReducer from "./categories";

const reducer = combineReducers({
  cart: cartReducer,
  filters: filtersReducer,
  categories: categoriesReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
