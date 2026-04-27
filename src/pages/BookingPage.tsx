function BookingPage() {
  return (
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5">Book A Table</h1>

          <div className="row g-5">
            <div className="col-md-6">
              <input className="form-control mb-3" placeholder="Name" />
              <input className="form-control mb-3" placeholder="Email" />
              <input className="form-control mb-3" placeholder="Date & Time" />
              <input className="form-control mb-3" placeholder="Guests" />

              <button className="btn btn-primary w-100">
                Book Now
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