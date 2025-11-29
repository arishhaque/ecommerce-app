import "./ProductList.css"
import ProductCard from "../ProductCard";
import { useState, useEffect, memo } from "react";


/* fetch is used to wrap Promise and AJAX
function fetch(url, options) {
  return new Promise(function (res, rej) {
    let req = new XMLHttpRequest();
    req.open(url, options);
    req.onreadystatechange = function () {
      if (this.readyState === 4 && this.code === 200) {
        res(this.response);
      } else {
        rej(this.error);
      }
    }
  });
}
*/

function generateProducts(data) {
  return data.map((prod) => ({ ...prod, quantity: 0 }));
}

function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductsList(generateProducts(data));
        setIsLoading(false);
      })
  }, [])

  if (isLoading) {
    return (
      <div>Loading..</div>
    )
  } else {
    return (
      <>
        <div className="products-container">
          {productsList.map(function (product) {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </>
    )
  }
}

// memo wraps the ProductList component and caches its props (name) to prevent unnecessary re-renders.
export default memo(ProductList);

/* Without Fetch API
const products = [
  {
    id: 1,
    title: "Product 1",
    price: 10.00
  },
  {
    id: 2,
    title: "Product 2",
    price: 20.00
  },
  {
    id: 3,
    title: "Product 3",
    price: 30.00
  },
  {
    id: 4,
    title: "Product 4",
    price: 40.00
  },
  {
    id: 5,
    title: "Product 5",
    price: 50.00
  }
]

// Mock API function
function getProductsAPI(callback) {
  setTimeout(function () {
    callback(products);
  }, 1000)
}


// Component
function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [productsList, setProductsList] = useState([]); // [] takes a default value (creating state variable of array type)
  useEffect(() => {
    getProductsAPI(function (res) {
      console.log('api started');
      setProductsList(res);
      setIsLoading(false); // react batches setter functions to re render only once
      console.log('api ended');
    });
  }, [productsList, isLoading]); // setter func causes re-rendering when any of the item in the array is changed. if we pass empty array it will render only on first call

  if (isLoading) {
    return (
      <div>Loading..</div>
    )
  } else {
    return (
      <div className="products">
        {productsList.map(function (product) {
          return <ProductCard title={product.title} price={product.price} key={product.id} />
        })}
      </div>
    )
  }
}

export default ProductList;

*/
// Prmoise and AJAX to make API calls
// let myPromise = Promise(function (res, rej) {
//   let req = new XMLHttpRequest();
//   req.open(url, options);
//   req.onreadystatechange = function () {
//     if (this.readyState === 4 && this.code === 200) {
//       res(this.response);
//     } else {
//       rej(this.error);
//     }
//   }
// })

// myPromise.then(
//   function (res) {
//     console.log(res);
//   },
//   function (err) {
//     console.log(err);
//   }
// )
