"use client";

import { getReviews, publishReview } from "@/fetch";
import { barrio } from "@/fonts/barrio";
import { useEffect, useState } from "react";
import { ReviewRating } from "./ReviewRating";
import { rgbDataURL } from "@/functions/rgbDataURL";
import Image from "next/image";

export const Reviews = ({ questId }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const reviewArr = await getReviews(questId);
      setReviews(reviewArr);
    }
    fetchData();
  }, [questId]);

  const handleReviewSubmit = async () => {
    if (review.trim()) {
      const newReview = { text: review, mark: Number(rating) };
      const published = await publishReview(questId, newReview);
      console.log(published);
      setReviews([...reviews, published]);
      setReview("");
      setRating(1);
    }
  };

  return (
    <div className="mt-6">
      <div className="mt-4">
        <h3 className={`${barrio.className} text-xl text-accent-color mt-4`}>
          Reviews:
        </h3>
        {reviews.length > 0 ? (
          reviews.map((r, index) => (
            <div
              key={index}
              className="mt-2 p-2 bg-gray-100 rounded-lg flex gap-[10px]"
            >
              <Image
                className="rounded-[50%]"
                width="45"
                height="45"
                src={r.user.imageURL}
                alt="user picture"
                priority={false}
                placeholder="blur"
                blurDataURL={rgbDataURL(238, 238, 238)}
              />
              <div>
                <p>{r.text}</p>
                <div className="text-yellow-500">
                  Rating: <ReviewRating rating={r.mark} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet</p>
        )}
      </div>

      <h2 className={`${barrio.className} text-2xl text-accent-color mt-4`}>
        Leave your review
      </h2>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here..."
        className="w-full p-2 mt-2 border rounded-lg"
      />
      <div className="mt-2 flex items-center gap-2">
        <label className="text-accent-color">Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-16 p-1 border rounded-lg text-center"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button
        onClick={handleReviewSubmit}
        className="mt-2 hover:bg-basic-color border-accent-color border-[1px] hover:text-accent-color rounded-[15px] px-4 text-basic-color bg-accent-color"
      >
        Send
      </button>
    </div>
  );
};
