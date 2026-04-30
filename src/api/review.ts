export const getReviews = async (menuItemId: number): Promise<[]> => {
  const res = await api.get(`/reviews/menu/${menuItemId}`);
  return res.data;
};