export type PopularItem = {
  name: string;
  reviews: number;
};

export type ReservationPerDay = {
  date: string;
  count: number;
};

export type Stats = {
  total_reservations: number;
  average_rating: number;

  popular_items: PopularItem[];

  reservations_per_day: ReservationPerDay[];
};