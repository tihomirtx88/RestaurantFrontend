import { useState } from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

type Props = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  delay?: string;
};

function MenuItemCard({ id, name, price, description, image, delay }: Props) {
  const [refresh, setRefresh] = useState(1);
  const ref = useAnimateOnScroll();
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div
      ref={ref}
      className="col-12 animate"
      style={{ transitionDelay: delay }}
    >
      <div className="d-flex align-items-start menu-item compact">
        {/* IMAGE */}
        <img
          className="flex-shrink-0 img-fluid rounded"
          src={image}
          alt={name}
          style={{ width: "70px" }}
        />

        {/* CONTENT */}
        <div className="w-100 d-flex flex-column text-start ps-3">
          {/* NAME + PRICE */}
          <h6 className="d-flex justify-content-between border-bottom pb-1 mb-1">
            <span>{name}</span>
            <span className="text-primary">${price}</span>
          </h6>

          {/* DESCRIPTION */}
          <small className="text-muted">{description}</small>

          {/* TOGGLE BUTTON */}
          <button
            className="btn btn-sm btn-link p-0 mt-1 text-primary"
            onClick={() => setShowReviews(!showReviews)}
          >
            {showReviews ? "Hide reviews" : "Show reviews"}
          </button>

          {/* REVIEWS (toggle) */}
          {showReviews && (
            <div className="mt-2 review-box">
              <ReviewList menuItemId={id} key={refresh} />
              <ReviewForm
                menuItemId={id}
                onSuccess={() => setRefresh((prev) => prev + 1)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
