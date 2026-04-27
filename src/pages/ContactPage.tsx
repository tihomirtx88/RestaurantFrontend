function ContactPage() {
  return (
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5">Contact Us</h1>

          <div className="row g-5">
            <div className="col-md-6">
              <input className="form-control mb-3" placeholder="Your Name" />
              <input className="form-control mb-3" placeholder="Email" />
              <textarea className="form-control mb-3" placeholder="Message"></textarea>

              <button className="btn btn-primary w-100">Send Message</button>
            </div>

            <div className="col-md-6">
              <iframe
                className="w-100 h-100"
                src="https://maps.google.com/maps?q=sofia&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ContactPage;