import "./navbar.scss";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <Link to="home" smooth={true} duration={500} style={{ textDecoration: "none" }}>
        <div className="search">
          <p>KUSHAGRA</p>
          <p>AGRAWAL</p>
        </div>
      </Link>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isMenuOpen ? "line open" : "line"}></div>
        <div className={isMenuOpen ? "line open" : "line"}></div>
        <div className={isMenuOpen ? "line open" : "line"}></div>
      </div>

      <div className={`second ${isMenuOpen ? "open" : ""}`}>
        <Link to="home" smooth={true} duration={500} style={{ textDecoration: "none" }}>
          <div className="item">Home</div>
        </Link>
        <Link to="about" smooth={true} duration={500} style={{ textDecoration: "none" }}>
          <div className="item">About</div>
        </Link>
        <Link to="projects" smooth={true} duration={500} style={{ textDecoration: "none" }}>
          <div className="item">Projects</div>
        </Link>
        <Link to="contact" smooth={true} duration={500} style={{ textDecoration: "none" }}>
          <div className="item">Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
