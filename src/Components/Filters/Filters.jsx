import "./Filters.css"
import { Button, Form } from "react-bootstrap";
import FilterRating from "../FilterRating";
import { useSelector, useDispatch } from "react-redux";
// import { AppContext } from "../../Context/AppContext";

function Filters() {

  /* using Context API to get filters state
    const {
      filtersState: { byStock, byFastDelivery, sort, byRating },
      filtersDispatch,
    } = AppContext();
  */

  const { sort, byStock, byFastDelivery, byRating } = useSelector((state) => state.filters);
  const filtersDispatch = useDispatch();

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
      <FilterRating
          rating={byRating}
          onClick={(i) =>
            filtersDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
        />
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
