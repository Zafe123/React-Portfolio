import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mt-3">
            <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "link-active" : "link")}>
              About
            </NavLink>
            <NavLink to="/skills" className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;