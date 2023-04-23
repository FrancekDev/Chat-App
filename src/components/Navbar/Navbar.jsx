import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

import "./Navbar.scss";
//components
import Button from "../Button/Button";
import User from "../User/User";

const Navbar = ({ member }) => {
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="Navbar">
      <User member={member} isHover={false} isOwner>
        <form onSubmit={onLogout}>
          <Button isLogout>Logout</Button>
        </form>
      </User>
    </div>
  );
};

Navbar.propTypes = {
  member: PropTypes.object,
};

export default Navbar;
