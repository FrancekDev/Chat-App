import React, { useState } from "react";
import "./Login.scss";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";

const Login = ({ onUsername }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const onChange = (e) => {
    setUser(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onUsername(user);
    navigate("/chat");
  };

  return (
    <section className="Container">
      <div className="Wrapper">
        <span className="Logo">Lightning chat</span>
        <span className="Title">Login</span>
        <form onSubmit={onSubmit} className="Form">
          <input
            onChange={onChange}
            className="Form-Input"
            type="text"
            placeholder="Enter your username"
          />
          <Button isLogin>Login</Button>
        </form>
      </div>
    </section>
  );
};

Login.propTypes = {
  onUsername: PropTypes.func,
};

export default Login;
