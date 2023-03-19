import React from "react";
import "./Login.scss";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";

const Login = () => {
  return (
    <section className="Container">
      <div className="Wrapper">
        <span className="Logo">Lightning</span>
        <span className="Title">Login</span>

        <form className="Form">
          <input className="Form-Input" type="email" placeholder="E-mail" />
          <input
            className="Form-Input"
            type="password"
            placeholder="Password"
          />

          <Button>Login</Button>
        </form>
        <p className="Form-Text">You don't have an account? Register</p>
      </div>
    </section>
  );
};

export default Login;
