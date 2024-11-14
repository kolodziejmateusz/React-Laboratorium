import { FaStar, FaRegStar } from "react-icons/fa";

function RatingBar({ rate }) {
  return (
    <div className="rating-bar">
      {[...Array(10)].map((_, index) => {
        return index < rate ? (
          <FaStar key={index} color="gold" />
        ) : (
          <FaRegStar key={index} color="gold" />
        );
      })}
    </div>
  );
}

export default RatingBar;
