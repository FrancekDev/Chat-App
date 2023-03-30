import PropTypes from "prop-types";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Chat from "../Chat/Chat";
import Chats from "../Chats/Chats";

import "./Sidebar.scss";
import user from "../../img/user.jpg";

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <Navbar img={user} />
      <Search img={user} />
      <Chats />
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
