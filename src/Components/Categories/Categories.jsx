import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../Store/categories";

function Categories() {
  //const [isLoading, setIsLoading] = useState(true);
  //const [categories, setCategories] = useState([]);
  const cat = useSelector(function (state) {
    return state.categories
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
  }, [])

  if (cat && cat.isLoading) {
    return (
      <div>Loading..</div>
    )
  } else {
    return (
      <>
        <div className="products">
          <ul>
            {cat.categories.map(function (category) {
              return <li>{category}</li>;
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default Categories;
