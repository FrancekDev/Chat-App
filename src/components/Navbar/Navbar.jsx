import React from "react";
import PropTypes from "prop-types";
import "./Navbar.scss";
import Button from "../Button/Button";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <span className="Navbar-Logo">
        <div className="User">
          <img className="User-Image" src="" alt="" />
          <span className="User-Name">Fran</span>
          <Button isLogout>Logout</Button>
        </div>
      </span>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
