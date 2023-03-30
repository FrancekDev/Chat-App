import React from "react";
import PropTypes from "prop-types";
import UserImg from "../../img/user.jpg";
import User from "../User/User";
import { ChatText } from "./ChatsStyled";
import "./Chats.scss";

const Chats = (props) => {
  return (
    <div className="Chats">
      <User img={UserImg} name={"Damir"} text={"Hello"} isChat></User>
    </div>
  );
};

Chats.propTypes = {};

export default Chats;
