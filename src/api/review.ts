import type { CreateReview, Review, UpdateReview } from "../types/review";
import api from "./axios";

export const getReviews = async (menuItemId: number): Promise<Review[]> => {
  const res = await api.get(`/reviews/menu/${menuItemId}`);
  return res.data;
};

export const createReview = async (data: CreateReview) => {
  const res = await api.post("/reviews/", data);
  return res.data;
};

export const updateReview = (id: number, data: UpdateReview) =>
  api.patch<Review>(`/reviews/${id}`, data);

export const deleteReview = (id:number) => 
  api.delete(`/reviews/${id}`)
