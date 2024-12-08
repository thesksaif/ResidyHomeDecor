import React,{useState} from "react";
import logo from '../assets/images/ResidyLogoTemp.png'
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg  p-4">
      <div className="container">
        <Link className="navbar-brand" to="/"><img className="app-logo text-bg-light" src={logo} alt="" width="80" /></Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
           <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/service">Services</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
