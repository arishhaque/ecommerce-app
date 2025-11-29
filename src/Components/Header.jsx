import { Badge, Dropdown, FormControl } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


export function Header() {

    const cart = useSelector((state) => state.cart.cart);
    let quantity = 0;
    Object.keys(cart).forEach((k) => quantity += cart[k].quantity);

    return (
      <>
        <header className='header-container'>
          <div className="header-left">
            <ul className="header-nav">
              <li><Link to="/">Home</Link></li>
              /
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
          <h1>E-Commerce App</h1>
          <div className="header-right">
            <FormControl placeholder="Search a product" className="search-bar" />
            <div className='header-cart'>
              <Link to="/cart">
                <FaShoppingCart color="black" fontSize="40px" />
                <Badge>{quantity}</Badge>
              </Link>
            </div>
          </div>
        </header>
      </>
    );
}

export default Header;
