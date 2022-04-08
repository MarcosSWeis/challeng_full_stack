import { Link, NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <NavLink to={"/"} className="navbar-brand">
          Start Bootstrap
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active px-1">
              <NavLink to={"/home"} className="nav-link ">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-1">
              <NavLink to={"/anime"} className="nav-link ">
                Anime
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink to={"/"} className="nav-link ">
                Login
              </NavLink>
            </li>
            <li className="nav-item px-1">
              <NavLink to={"/algo2"} className="nav-link">
                #
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
