import { useEffect, useState } from "react";
import type { Reservation } from "../types/reservation";
import { getMyReservations } from "../api/reservation";
import Loader from "../components/Loader";

function MyReservationsPage() {
  const [data, setData] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyReservations()
      .then(setData)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return(
    <div className="container py-5">
        <h2>My Reservations</h2>

        {loading && <Loader />}

        {data.map((r) => (
          <div key={r.id} className="card p-3 my-2">
            <p>Date: {r.reservation_date}</p>
            <p>Guests: {r.guests}</p>
          </div>
        ))}
      </div>
  );
}

export default MyReservationsPage;
