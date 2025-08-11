import { useState } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import ProductCartContext from './Context/ProductCartContext';
import Cart from './Components/Cart';

function App() {
  // to update cart whenever cart items change, and this should be available to product list and card page to add an item to cart
  const [cart, setCart] = useState({});

  function increaseQuantity(product) {
    const newCart = { ...cart }
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 0
      }
    }
    newCart[product.id].quantity += 1;
    setCart(newCart)
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart }
    if (!newCart[product.id]) return;

    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id] // delete is a keyword used to delete a key from object
    }
    setCart(newCart)
  }

  return (
    <ProductCartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }} >
      <div className="App">
        <Cart />
        <ProductList />
      </div>
    </ProductCartContext.Provider>
  );
}

export default App;
