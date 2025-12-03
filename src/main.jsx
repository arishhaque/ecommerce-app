import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './Store';
import App from './App.jsx'
import CartProvider from './Context/CartContext'
import ProductList from './Components/ProductList/ProductList';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CartProvider value={{ cartState: [], cartDispatch: () => {}, filtersState: {}, filtersDistpatch: () => {} }}>
        <App />
      </CartProvider>
    </Provider>
  </StrictMode>
)
