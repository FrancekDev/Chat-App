import React from "react";
import PropTypes from "prop-types";
import "./User.scss";

const User = ({
  children,
  img,
  name,
  text,
  isChat = false,
  isHover = true,
}) => {
  return (
    <div className={`User ${isHover ? "User_Hover" : ""}`}>
      <img className="User-Image" src={img} alt="" />
      <div className="User-ChatsInfo">
        <span
          className={`User-Name ${isChat ? "User-Name_Chat" : ""} 
         `}
        >
          {name}
        </span>
        {text && <p className="User-NameText">{text}</p>}
      </div>
      {children}
    </div>
  );
};

User.propTypes = {
  children: PropTypes.node,
  img: PropTypes.node,
  name: PropTypes.string,
  isChat: PropTypes.string,
  isHover: PropTypes.string,
  text: PropTypes.string,
};

export default User;
