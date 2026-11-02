import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">⚛️</span> Belajar
          <span className="grad">React</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/latihan">Latihan</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
