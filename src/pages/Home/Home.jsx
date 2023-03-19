import React from "react";
import "./Home.scss";
import PropTypes from "prop-types";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "../../components/Chat/Chat";

const Home = (props) => {
  return (
    <div className="Home">
      <div className="Home-Container">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
