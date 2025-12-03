import "./Categories.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../Store/categories";

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, [])

  if (categories && categories.isLoading) {
    return (
      <div>Loading..</div>
    )
  } else {
    return (
      <>
        <div className="categories-container"><h1>Categories</h1>
          <ul>
            {categories.categories.map(function (category) {
              return <li key={category} className="category-label">{category}</li>;
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default Categories;
