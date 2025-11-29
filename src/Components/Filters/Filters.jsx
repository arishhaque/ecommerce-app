import "./Filters.css"
import { Button, Form } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";
//import { ProductRating } from "./../ProductRating/ProductRating";

const Filters = () => {
  /*const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort },
  } = CartContext();*/

  // make state for rating

  return (
    <div className="filters-container">
      <div className="filters-title">Filter Products</div>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        {/*<ProductRating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />*/}
      </span>
      <Button
        variant="light"
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
