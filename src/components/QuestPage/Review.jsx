"use client";

import { barrio } from "@/fonts/barrio";
import { useState } from "react";

export const Reviews = () => {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = () => {
    if (review.trim()) {
      setReviews([...reviews, review]);
      setReview("");
    }
  };

  return (
    <div className="mt-6">
      <div className="mt-4">
        <h3 className={`${barrio.className} text-xl text-accent-color mt-4`}>Reviews:</h3>
        {reviews.length > 0 ? (
          reviews.map((r, index) => (
            <p key={index} className="mt-2 p-2 bg-gray-100 rounded-lg">
              {r}
            </p>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet</p>
        )}
      </div>

      <h2 className={`${barrio.className} text-2xl text-accent-color mt-4`}>Leave your review</h2>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here..."
        className="w-full p-2 mt-2 border rounded-lg"
      />
      <button
        onClick={handleReviewSubmit}
        className="hover:bg-basic-color border-accent-color border-[1px] hover:text-accent-color rounded-[15px] px-4 text-basic-color bg-accent-color"
      >
        Send
      </button>
    </div>
  );
};
