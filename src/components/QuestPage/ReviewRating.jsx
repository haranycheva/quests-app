'use client'

import StarRatings from 'react-star-ratings';
import { useEffect, useState } from 'react';

export function ReviewRating({ rating }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <StarRatings
      rating={rating}
      starRatedColor="#38369A"
      starEmptyColor="#7CA5B8"
      numberOfStars={5}
      starDimension="10px"
      starSpacing="2px"
    />
  );
}
