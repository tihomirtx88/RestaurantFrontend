export function getAverageRating(ratings: number[]) {
  if (ratings.length === 0) return 0;
  const sum = ratings.reduce((a, b) => a + b, 0);
  return Number((sum / ratings.length).toFixed(1));
}
