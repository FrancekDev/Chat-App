import React from "react";
import PropTypes from "prop-types";
import "./Search.scss";

//components
import User from "../User/User";

//assets
import UserImg from "../../img/user.jpg";

const Search = () => {
  return (
    <div className="Search">
      <div className="Search-Form">
        <input type="text" placeholder="Find a user" />
      </div>

      <User img={UserImg} name={"Sarah"}></User>
    </div>
  );
};

Search.propTypes = {};

export default Search;
