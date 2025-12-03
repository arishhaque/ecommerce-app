import { AiFillStar, AiOutlineStar } from "react-icons/ai";


function FilterRating({ rating, onClick }) {

  return (
    <>
      <span >By Rating:
        {
          new Array(5).fill(0).map((_, index) => {
            return <span key={index} style={{ cursor: "pointer", margin: '0, 10px', padding: '5px' }} onClick={() => onClick(index)}>
              { rating > index ? (<AiFillStar fontSize="20px" />) : (<AiOutlineStar fontSize="20px" /> )}
            </span>
          })
        }
      </span>
    </>
  )
}

export default FilterRating;
