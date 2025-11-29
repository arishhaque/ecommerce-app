import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import CartPage from './Pages/Cart/CartPage';
import NotFoundPage from './Pages/NotFound';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app-container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
