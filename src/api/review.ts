import type { Review } from "../types/review";
import api from "./axios";

export const getReviews = async (menuItemId: number): Promise<Review[]> => {
  const res = await api.get(`/reviews/menu/${menuItemId}`);
  return res.data;
};

export const createReview = async (data: {
  rating: number;
  comment: string;
  menu_item_id: number;
}) => {
  const res = await api.post("/reviews/", data);
  return res.data;
};