import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({
  isLogout = false,
  isLogin = false,
  isSend = false,
  children,
  handleClick,
}) => {
  let modifierClass = "";

  switch (true) {
    case isLogin:
      modifierClass = "Button_login";
      break;
    case isSend:
      modifierClass = "Button_send";
      break;
    case isLogout:
      modifierClass = "Button_logout";
      break;
    default:
      modifierClass = "";
      break;
  }

  return (
    <button className={`Button ${modifierClass}`} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  isLogin: PropTypes.bool,
  isLogout: PropTypes.bool,
  isSend: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
