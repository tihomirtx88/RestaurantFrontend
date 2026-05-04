import { useEffect, useState } from "react";
import type { Review } from "../types/review";
import { getReviews } from "../api/review";
import Loader from "./Loader";
import StarRating from "./StarRating";
import { getAverageRating } from "../utiles/review";

function ReviewList({ menuItemId }: { menuItemId: number }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getReviews(menuItemId)
      .then(setReviews)
      .finally(() => setLoading(false));
  }, [menuItemId]);

  if (loading) return <Loader />;

  const avg = getAverageRating(reviews.map((rating) => rating.rating));

  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className="mt-2">
      {/* ⭐ Average */}
      <div className="mb-2">
        <strong>Rating:</strong> <StarRating rating={Math.round(avg)} />{" "}
        <span>({avg} / 5)</span>
      </div>

      {reviews.length === 0 && <p>No reviews yet.</p>}

      {reviews.map((r) => (
        <div key={r.id} className="border rounded p-2 mb-2">
          <StarRating rating={r.rating} />
          <p className="mb-0">{r.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
