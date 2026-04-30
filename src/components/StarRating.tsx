type Props = {
  rating: number;
  setRating?: (value: number) => void;
};

function StarRating({ rating, setRating }: Props) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            cursor: setRating ? "pointer" : "default",
            color: star <= rating ? "gold" : "#ccc",
            fontSize: "20px",
          }}
          onClick={() => setRating && setRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
