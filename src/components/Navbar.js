import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function Navbar(){
  const handleOnClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('ContactUs');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="./logo.png" className="img-fluid Img" alt="RK" />
          RK Wood Works
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='list'>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Designs">
                Designs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#" onClick={handleOnClick}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;