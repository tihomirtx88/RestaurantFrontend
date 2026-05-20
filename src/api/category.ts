import type { Category, CreateCategory, UpdateCategory } from "../types/category";
import api from "./axios";

export const getCategories = async (): Promise<Category[]> => {
  const res = await api.get("/categories/");
  return res.data;
};

export const createCategory = (data: CreateCategory) =>
  api.post<Category>("/categories/", data);

export const updateCategory = (id: number, data: UpdateCategory) =>
  api.patch<Category>(`/categories/${id}`, data);

export const deleteCategory = (id: number) => api.delete(`/categories/${id}`);
