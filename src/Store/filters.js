export function filtersReducer(state = { filters: {} }, action) {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock }
    case "FILTER_BY_FAST_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery }
    case "FILTER_BY_RATING":
      return { ...state, byRating: !state.byRating }
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload }
    case "CLEAR_FILTERS":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ""
      }
    default:
      return state;
  }
}

export default filtersReducer;
