import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "src/asset/icon/blog-logo.svg";
import "src/styles/header.css";

function Header() {
  const [isShown, setIsShown] = useState(false);
  const handleShow = () => {
    setIsShown((current) => !current);
  };

  return (
    <header className="horizontal-centering">
      <nav>
        <NavLink to="/" className="logo">
          <img src={logo} alt="logo" />
        </NavLink>
        <button className="btn-burger" onClick={handleShow}>
          {/* icon set in css */}
        </button>
        <div className={isShown ? "nav-group shown" : "nav-group"}>
          <ul className="nav-container">
            <li>
              <NavLink to="/" className="nav-link current">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="nav-link">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="nav-link">
                Reviews
              </NavLink>
            </li>
          </ul>
          <ul className="login-container">
            <li>
              <NavLink to="" id="sign-up" className="nav-link">
                Sign up
              </NavLink>
            </li>
            <li>
              <NavLink to="" id="log-in" className="nav-link">
                Log in
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
