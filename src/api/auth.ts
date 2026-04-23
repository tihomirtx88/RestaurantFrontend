import api from "./axios";
import type { AuthResponse } from "../types/auth";

export const login = async(email: string, password: string): Promise<AuthResponse> => {
    const res = await api.post("/auth/login", { email, password });
    return res.data;
}

export const register = async (email: string, password: string) => {
  return api.post("/auth/register", { email, password });
};