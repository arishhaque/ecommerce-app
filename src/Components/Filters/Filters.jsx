import "./Filters.css"
import { Button, Form } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";

function Filters() {

  const {
    filtersState: { byStock, byFastDelivery, sort },
    filtersDispatch,
  } = CartContext();

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
          onChange={() =>
            filtersDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            filtersDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            filtersDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            filtersDispatch({
              type: "FILTER_BY_FAST_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          filtersDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
