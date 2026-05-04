function Hero() {
  return (
    <div className="container-xxl py-5  bg-dark hero-header mb-5 ">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 text-white animated slideInLeft wow">
              Enjoy Our <br /> Delicious Meal
            </h1>

            <p className="text-white animated slideInLeft mb-4 pb-2">
              Lorem ipsum dolor sit amet...
            </p>

            <button className="btn btn-primary py-sm-3 px-sm-5 me-3">
              Book A Table
            </button>
          </div>

          <div className="col-lg-6 text-center text-lg-end overflow-hidden wow">
            <img className="img-fluid" src="/img/hero.png" alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
