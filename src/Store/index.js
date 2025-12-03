import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "./cart";
import filtersReducer from "./filters";

const reducer = combineReducers({
  cart: cartReducer,
  filters: filtersReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
