import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

function Hero() {
  const titleRef = useAnimateOnScroll();
  const btnRef = useAnimateOnScroll();

  return (
    <div className="container-xxl py-5 bg-dark hero-header">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1
              ref={titleRef}
              className="display-3 text-white animate slide-left"
            >
              Enjoy Our <br /> Delicious Meal
            </h1>

            <button
              ref={btnRef}
              className="btn btn-primary py-sm-3 px-sm-5 me-3 animate"
            >
              Book A Table
            </button>
          </div>

          <div className="col-lg-6 text-center text-lg-end">
            <img className="img-fluid" src="/img/hero.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
