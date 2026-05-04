import { createReservation } from "../api/reservation";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useForm } from "react-hook-form";

type FormData = {
  reservation_date: string;
  guests: number;
};

function BookingPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await createReservation(data);
      toast.success("Reservation created!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Error creating reservation");
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5">Book A Table</h1>

        {isSubmitting && <Loader />}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-5">
            <div className="col-md-6">
              {/* DATE */}
              <input
                type="datetime-local"
                className="form-control mb-2"
                {...register("reservation_date", {
                  required: "Date is required",
                })}
              />
              {errors.reservation_date && (
                <small className="text-danger">
                  {errors.reservation_date.message}
                </small>
              )}

              {/* GUESTS */}
              <input
                type="number"
                className="form-control mb-2"
                placeholder="Number of guests"
                {...register("guests", {
                  required: "Guests required",
                  min: { value: 1, message: "At least 1 guest" },
                })}
              />

              {errors.guests && (
                <small className="text-danger">{errors.guests.message}</small>
              )}

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Book Now"}
              </button>
            </div>

            <div className="col-md-6">
              <img src="/img/about-1.jpg" className="img-fluid rounded" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
