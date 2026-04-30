import { useEffect, useState } from "react";
import type { Review } from "../types/review";
import { getReviews } from "../api/review";
import Loader from "./Loader";
import StarRating from "./StarRating";

function ReviewList({ menuItemId }: { menuItemId: number }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const loadReviews = () => {
    setLoading(true);
    getReviews(menuItemId)
      .then(setReviews)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadReviews();
  }, [menuItemId]);

  if (loading) return <Loader />;

  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

 
     return (
    <div className="mt-3">
      {reviews.map((r) => (
        <div key={r.id} className="border rounded p-3 mb-2">
          <StarRating rating={r.rating} />
          <p className="mb-1">{r.comment}</p>
        </div>
      ))}
    </div>
  );
  
}

export default ReviewList;
