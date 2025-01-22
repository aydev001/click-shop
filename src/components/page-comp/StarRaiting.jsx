import { AiFillStar } from "react-icons/ai"; 
import { AiOutlineStar } from "react-icons/ai"; 
import React from "react";

const StarRating = ({ rate, maxStars = 5 }) => {
  const filledStars = Math.round(rate-0.4); // Bo'yalgan yulduzlar soni
  const emptyStars = maxStars - filledStars; // Bo'yalmagan yulduzlar soni

  return (
    <div className="flex space-x-1">
      {/* Bo'yalgan yulduzlar */}
      {Array.from({ length: filledStars }).map((_, index) => (
       <AiFillStar key={index}/>
      ))}

      {/* Bo'yalmagan yulduzlar */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <AiOutlineStar key={index}/>
      ))}
    </div>
  );
};

export default StarRating;
