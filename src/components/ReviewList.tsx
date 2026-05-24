import type { Review } from "../types/review";
import { deleteReview, getReviews } from "../api/review";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function ReviewList({ menuItemId }: { menuItemId: number }) {
  const queryClient = useQueryClient();

  //  Query
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews", menuItemId],

    queryFn: () => getReviews(menuItemId),
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: deleteReview,

    onMutate: async (id) => {
      await queryClient.cancelQueries({
        queryKey: ["reviews", menuItemId],
      });

      const previousReviews = queryClient.getQueryData<Review[]>([
        "reviews",
        menuItemId,
      ]);

      queryClient.setQueryData<Review[]>(["reviews", menuItemId], (old) =>
        old?.filter((review) => review.id !== id),
      );

      return { previousReviews };
    },

    onError: (_err, _id, context) => {
      toast.error("Delete failed");

      queryClient.setQueryData(
        ["reviews", menuItemId],
        context?.previousReviews,
      );
    },

    onSuccess: () => {
      toast.success("Review deleted");
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews", menuItemId],
      });
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {reviews?.map((review) => (
        <div key={review.id} className="border rounded p-3 mb-3">
          <div className="d-flex justify-content-between">
            <strong>⭐ {review.rating}</strong>

            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteMutation.mutate(review.id)}
            >
              Delete
            </button>
          </div>

          <p className="mb-0 mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
