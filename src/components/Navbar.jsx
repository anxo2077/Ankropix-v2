import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Ankropix
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                PRICING
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                GALLERY
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link btn-contact">
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
