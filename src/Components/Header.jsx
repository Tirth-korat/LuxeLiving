import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { links } from "../Constants/Header_Constant";
const Header = () => {
  return (
    <>
      <nav
        className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Furni navigation bar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            LuxeLiving
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              {links.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={link.to}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <>
                <li>
                  <a className="nav-link" href="#">
                    <img src="./Assets/images/user.svg" />
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/Cart">
                    <img src="./Assets/images/cart.svg" />
                  </a>
                </li>
              </>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
