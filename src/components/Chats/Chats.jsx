import React from "react";
import PropTypes from "prop-types";
import UserImg from "../../assets/img/user.jpg";
import User from "../User/User";
import "./Chats.scss";

const Chats = (props) => {
  return (
    <div className="Chats">
      <User img={UserImg} name={"Damir"} text={"Hello"} isChat></User>
      <User img={UserImg} name={"Zrinka"} text={"Hello"} isChat></User>
      <User img={UserImg} name={"Bojan"} text={"Hello"} isChat></User>
      <User img={UserImg} name={"Pero"} text={"Hello"} isChat></User>
      <User img={UserImg} name={"Šime"} text={"Hello"} isChat></User>
    </div>
  );
};

Chats.propTypes = {};

export default Chats;
