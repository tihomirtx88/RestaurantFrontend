import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { createReview } from "../api/review";
import StarRating from "./StarRating";

type ReviewFormProps = {
  menuItemId: number;
  onSuccess: () => void;
};

function ReviewForm({ menuItemId, onSuccess }: ReviewFormProps) {
  const { user } = useAuth();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    if (!user) {
        return toast.error("You must be logged in to review");
    }

    if (rating === 0) {
        return toast.error("Please select rating");
    }

    try {
        setLoading(true);

        await createReview({
            rating, comment, menu_item_id: menuItemId
        });

        toast.success("Review added!");

        setComment("");
        setRating(0);

        onSuccess()
    } catch (err: unknown) {
         toast.error("Failed to add review");
         console.log(err);
    } finally{
        setLoading(false)
    }
  };

   return (
    <div className="mt-3">
      <h6>Add Review</h6>

      <StarRating rating={rating} setRating={setRating} />

      <textarea
        className="form-control my-2"
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </div>
  );
}

export default ReviewForm;
