import { Badge, Dropdown, FormControl, Nav, Navbar, Container } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { CartContext } from "./../Context/CartContext";


export function Header() {

    const cart = useSelector((state) => state.cart.cart);
    let quantity = 0;
    Object.keys(cart).forEach((k) => quantity += cart[k].quantity);

    const { filtersDispatch } = CartContext();

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
            <FormControl className="search-bar"
              placeholder="Search a product"
              onChange={(e) => {
                filtersDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value
                })
              }}
            />
            <Navbar variant="dark" style={{ height: 40 }}>
              <Container>
                <Nav>
                  <Dropdown className='cart-dropdown'>
                    <Dropdown.Toggle variant="success">
                      <FaShoppingCart  color="black" fontSize="40px" />
                      <Link to="/cart"><Badge>{quantity}</Badge></Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      { Object.keys(cart).length > 0 ?
                          Object.keys(cart).map((k) => {
                            return (
                              <div className='header-cart-items'>
                                <span  key={cart[k].id}>
                                  <span className="header-cart-item-title">{cart[k].title}, </span>
                                  <span className="header-cart-item-detail">quantity: {cart[k].quantity}, </span>
                                  <span className="header-cart-item-detail">price: {cart[k].price}</span>
                                </span>
                              </div>
                            )
                          })
                        :
                          <span style={{ padding: 10 }}>Cart is Empty!</span>
                      }
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              </Container>
            </Navbar>
          </div>
        </header>
      </>
    );
}

export default Header;
