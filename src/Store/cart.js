import { omit } from "lodash";

function cartReducer(state = { cart: {} }, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      if (state.cart[product.id]) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [product.id]: {
              ...state.cart[product.id],
              quantity: state.cart[product.id].quantity + 1
            }
          }
        }
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            [product.id]: {
              ...product,
              quantity: 1
            }
          }
        }
      }
    }
    case "REMOVE_FROM_CART": {
      const product = action.payload;
      if (state.cart[product.id].quantity <= 1) {
        return {
          ...state,
          cart: omit(state.cart, product.id)
        }
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            [product.id]: {
              ...state.cart[product.id],
              quantity: state.cart[product.id].quantity - 1
            }
          }
        }
      }
    }
    default:
      return state;
  }

}

export default cartReducer;

// const store = createStore(CartReducer);
// export default store;
