import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

function AboutSection() {
  const imgRef = useAnimateOnScroll();
  const textRef = useAnimateOnScroll();

  return (
    <div className="container-xxl py-5" style={{ backgroundColor: "#eeeeee" }}>
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* IMAGE */}
          <div
            ref={imgRef}
            className="col-lg-6 animate slide-left"
            style={{ transitionDelay: "0.2s" }}
          >
            <img src="/img/about-1.jpg" className="img-fluid rounded" />
          </div>

          {/* TEXT */}
          <div
            ref={textRef}
            className="col-lg-6 animate"
            style={{ transitionDelay: "0.4s" }}
          >
            <h5 className="text-primary">About Us</h5>
            <h1>Welcome to Restoran</h1>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
