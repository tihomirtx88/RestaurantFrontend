import type { MenuItem } from "../types/menu";
import api from "./axios";

export const get_menu = async(category?: string): Promise<MenuItem[]> =>{
    const res = await api.get("/menu/", {
        params: category ? {category} : {}
    })

    return res.data;
};