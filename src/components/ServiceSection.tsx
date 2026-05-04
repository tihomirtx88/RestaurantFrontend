import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

function ServiceSection() {
  const card1 = useAnimateOnScroll();
  const card2 = useAnimateOnScroll();
  const card3 = useAnimateOnScroll();
  const card4 = useAnimateOnScroll();

  return (
    <div className="container-xxl py-5" style={{ backgroundColor: "#eeeeee" }}>
      <div className="container">
        <div className="row g-4">
          <div ref={card1} className="col-lg-3 col-sm-6 animate" style={{ transitionDelay: "0.1s" }}>
            <div className="service-item rounded pt-3">
              <div className="p-4 text-center">
                <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                <h5>Master Chefs</h5>
                <p>Professional chefs</p>
              </div>
            </div>
          </div>

          <div ref={card2} className="col-lg-3 col-sm-6 animate" style={{ transitionDelay: "0.2s" }}>
            <div className="service-item rounded pt-3">
              <div className="p-4 text-center">
                <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                <h5>Quality Food</h5>
                <p>Fresh ingredients</p>
              </div>
            </div>
          </div>

          <div ref={card3} className="col-lg-3 col-sm-6 animate" style={{ transitionDelay: "0.3s" }}>
            <div className="service-item rounded pt-3">
              <div className="p-4 text-center">
                <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                <h5>Online Order</h5>
                <p>Easy ordering</p>
              </div>
            </div>
          </div>

          <div ref={card4} className="col-lg-3 col-sm-6 animate" style={{ transitionDelay: "0.4s" }}>
            <div className="service-item rounded pt-3">
              <div className="p-4 text-center">
                <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                <h5>24/7 Service</h5>
                <p>Always available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
