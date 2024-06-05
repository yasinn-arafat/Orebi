import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

const RatingStar = ({ rating }) => {
  const StarRating = Array.from({ length: 5 }, (x, index) => {
    let FructionNumber = index + 0.5;

    return (
      <div>
        {rating >= index + 1 ? (
          <IoIosStar className="text-yellow-400" />
        ) : rating >= FructionNumber ? (
          <IoIosStarHalf className="text-yellow-400" />
        ) : (
          <IoIosStarOutline className="text-yellow-400" />
        )}
      </div>
    );
  });

  return (
    <div className="pt-3">
      <div className="flex items-center gap-x-4">
        <div className="flex items-center">{StarRating}</div>
        <div>
          <p>
            {rating >= Math.floor(rating)
              ? `${Math.floor(rating)}.5`
              : `${Math.floor(rating)}`}
            {" Riview"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RatingStar;
