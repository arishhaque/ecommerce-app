export function loadCategories() {
  return (dispatch) => {
    dispatch({ type: "LOAD_CATEGORIES_START", payload: {} })
    fetch("https://fakestoreapi.com/products/categories")
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      dispatch({ type: "LOAD_CATEGORIES_DONE", payload: data })
    }).catch((error) => {
      dispatch({ type: "LOAD_CATEGORIES_ERROR", payload: error });
    });
  }
}

function categoriesReducer(state = { isLoading: true, error: false, categories: [] }, action) {
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
        error: false,
        categories: action.payload
      }
    }
    case "LOAD_CATEGORIES_ERROR": {
      return {
        ...state,
        isLoading: false,
        error: true,
        categories: []
      }
    }
    default:
      return state;
  }
}

export default categoriesReducer;
