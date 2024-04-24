// Rating.js

import React, { useState } from 'react';

const Rating = ({ onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRate = (value) => {
    setRating(value);
    onRate(value); // Kirim nilai rating ke komponen induk
  };

  return (
    <div>
      <span>Rate this movie:</span>
      {[1, 2, 3, 4, 5].map((value) => (
        <button key={value} onClick={() => handleRate(value)}>
          {value}
        </button>
      ))}
    </div>
  );
};

export default Rating;
