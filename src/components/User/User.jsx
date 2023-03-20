import React from "react";
import PropTypes from "prop-types";
import "./User.scss";

const User = ({ children, img, name }) => {
  return (
    <div className="User">
      <img className="User-Image" src={img} alt="" />
      <span className="User-Name">{name}</span>
      {children}
    </div>
  );
};

User.propTypes = {
  children: PropTypes.node,
  img: PropTypes.node,
  name: PropTypes.string,
};

export default User;
