import React from "react";
import PropTypes from "prop-types";
import "./User.scss";

const User = ({ children, member, isOwner }) => {
  return (
    <div className={"User"}>
      <span
        className={`User-Image ${isOwner ? "User-ImageOwner" : ""}`}
        style={{ backgroundColor: member.color }}
      />
      <span className={`User-Name`}>{member.username}</span>
      {children}
    </div>
  );
};

User.propTypes = {
  children: PropTypes.node,
  member: PropTypes.object,
  isOwner: PropTypes.bool,
};

export default User;
