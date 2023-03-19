import PropTypes from "prop-types";
import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Sidebar.scss";

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <Navbar />
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
