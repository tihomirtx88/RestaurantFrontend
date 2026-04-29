import type { Reservation } from "../types/reservation";
import api from "./axios";

export const createReservation = async (data : {reservation_data: string; gueast: number}) => {
    const res = await api.post("/reservations/", data);
    return res.data;
}; 
export const getMyReservations = async (): Promise<Reservation[]> => {
    const res = await api.get("/reservations/my");
    return res.data;
};