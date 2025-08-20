export function loadCategories() {
  return (dispatch) => {
    dispatch({ type: "LOAD_CATEGORIES_START", payload: {} })
    fetch("https://fakestoreapi.com/products/categories")
      .then(function (response) {
        return response.json();
      })
      .then((res) => {
        dispatch({ type: "LOAD_CATEGORIES_DONE", payload: res })
      })
  }
}

function categoriesReducer(state = { isLoading: true, categories: [] }, action) {
  switch (action.type) {
    case "LOAD_CATEGORIES_START": {
      return {
        ...state,
        isLoading: true,
        categories: []
      }
    }

    case "LOAD_CATEGORIES_DONE": {
      return {
        ...state,
        isLoading: false,
        categories: action.payload
      }
    }
    default:
      return state;
  }
}

export default categoriesReducer;
