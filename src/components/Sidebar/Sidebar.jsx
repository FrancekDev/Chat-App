import PropTypes from "prop-types";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

import "./Sidebar.scss";
import user from "../../img/user.jpg";

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <Navbar img={user} />
      <Search img={user} />
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
