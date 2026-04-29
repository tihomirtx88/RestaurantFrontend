import { useState } from "react";
import { createReservation } from "../api/reservation";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

function BookingPage() {

    const [date, setDate] = useState("");
    const [guests, setGuests] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async ()=> {
      try {
        setLoading(true);

        await createReservation({
          reservation_data: date,
          gueast: Number(guests)
        });

        toast.success("Reservation created successfully!");

        setDate("");
        setGuests(1); 

      } catch (err: unknown) {
        console.log(err);
        
        toast.error("Failed to create reservation");
      }finally{
        setLoading(false);
      }
    };

  return (
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5">Book A Table</h1>

            {loading && <Loader />}

          <div className="row g-5">
            <div className="col-md-6">

              <input
                type="datetime-local"
                className="form-control mb-3"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <input
                type="number"
                className="form-control mb-3"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              />

              <button
                className="btn btn-primary w-100"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Booking..." : "Book Now"}
              </button>

            </div>

            <div className="col-md-6">
              <img src="/img/about-1.jpg" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default BookingPage;