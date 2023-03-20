import React from "react";
import PropTypes from "prop-types";
import "./Navbar.scss";

//components
import Button from "../Button/Button";
import User from "../User/User";

//assets
import UserImg from "../../img/user.jpg";

const Navbar = ({ img }) => {
  return (
    <div className="Navbar">
      <span className="Navbar-Logo">Lightning chat</span>
      <User img={UserImg} name={"Fran"}>
        <Button isLogout>Logout</Button>
      </User>
    </div>
  );
};

Navbar.propTypes = {
  img: PropTypes.node,
};

export default Navbar;
