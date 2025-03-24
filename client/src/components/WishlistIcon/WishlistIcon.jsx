import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./WishlistIcon.css";

const WishlistIcon = () => {
  const [isFilled, setIsFilled] = useState(false);

  const toggleIcon = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div
      className={`wishlist-icon ${isFilled ? "filled" : ""}`}
      onClick={toggleIcon}
    >
      {isFilled ? <FaHeart /> : <FaRegHeart />}
    </div>
  );
};

export default WishlistIcon;
