import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import categoriesReducer from "./categories";
import cartReducer from "./cart";


const reducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
