function ServiceSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">

          <div className="col-lg-3 col-sm-6">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                <h5>Master Chefs</h5>
                <p>Professional chefs</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-utensils text-primary mb-4"></i>
                <h5>Quality Food</h5>
                <p>Fresh ingredients</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServiceSection;