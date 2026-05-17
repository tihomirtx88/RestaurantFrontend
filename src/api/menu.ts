import type { CreateMenuItem, MenuItem, UpdateMenuItem } from "../types/menu";
import api from "./axios";

export const get_menu = async(category?: string): Promise<MenuItem[]> =>{
    const res = await api.get("/menu/", {
        params: category ? {category} : {}
    })

    return res.data;
};


export const createMenuItem = (data: CreateMenuItem) =>
  api.post<MenuItem>("/menu", data);

export const updateMenuItem = (id: number, data: UpdateMenuItemч) =>
  api.patch<MenuItem>(`/menu/${id}`, data);

export const deleteMenuItem = (id: number) =>
  api.delete(`/menu/${id}`);