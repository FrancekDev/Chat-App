import React from "react";
import "./Register.scss";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import fileImg from "../../img/addAvatar.png";
const Register = () => {
  return (
    <section className="Container">
      <div className="Wrapper">
        <span className="Logo">Lightning chat</span>
        <span className="Title">Register</span>

        <form className="Form">
          <input className="Form-Input" type="text" placeholder="Username" />
          <input className="Form-Input" type="email" placeholder="E-mail" />
          <input
            className="Form-Input"
            type="password"
            placeholder="Password"
          />
          <input className="Form-Upload" type="file" id="file" />
          <label htmlFor="file">
            <img src={fileImg} />
            <span>Add an avatar</span>
          </label>
          <Button isLogin>Sign up</Button>
        </form>
        <p className="Form-Text">You have an account? Login</p>
      </div>
    </section>
  );
};

export default Register;
