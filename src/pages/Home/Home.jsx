import React, { useState } from "react";
import "./Home.scss";
import PropTypes from "prop-types";

import Chat from "../../components/Chat/Chat";

const Home = ({ username }) => {
  console.log(username);
  return (
    <div className="Home">
      <div className="Home-Container">
        <Chat username={username}></Chat>
      </div>
    </div>
  );
};

Home.propTypes = {
  username: PropTypes.string,
};

export default Home;
