import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-utensils me-3"></i>Restoran
            </h1>
          </Link>
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/menu" className="nav-item nav-link">
            Menu
          </Link>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
