import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({
  prop,
  isLanding = false,
  isSecondary = false,
  isOutline = false,
  children,
  handleClick,
}) => {
  let modifierClass = "";

  switch (true) {
    case isLanding:
      modifierClass = "Button_landing";
      break;
    case isSecondary:
      modifierClass = "Button_secondary";
      break;
    case isOutline:
      modifierClass = "Button_outline";
      break;
    default:
      modifierClass = "";
      break;
  }

  return (
    <button className={`Button ${modifierClass} ${prop}`} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  prop: PropTypes.string,
  children: PropTypes.node,
  isLanding: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isOutline: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
