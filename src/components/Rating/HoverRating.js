import React, { useState } from "react";
import "./HoverRating.scss";

export const HoverRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`rating__star ${
            rating >= value ? "rating__star--active" : ""
          }`}
          onClick={() => handleRating(value)}
        >
          ★
        </span>
      ))}
    </div>
  );
};
