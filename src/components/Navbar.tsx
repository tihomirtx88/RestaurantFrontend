import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const auth = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <div className="collapse navbar-collapse">
        <div className="d-flex align-items-center justify-content-center w-100">
          {/* LEFT */}
          <div className="d-flex align-items-center">
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

          {/* RIGHT */}
          <div className="d-flex">
            {!auth.user ? (
              <>
                <Link to="/login" className="nav-item nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-item nav-link">
                  Register
                </Link>
              </>
            ) : (
              <span
                className="nav-item nav-link"
                onClick={auth.logout}
                style={{ cursor: "pointer" }}
              >
                Logout
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
