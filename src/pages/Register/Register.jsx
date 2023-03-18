import React from "react";
import "./Register.scss";
import Button from "../../components/Button/Button";

const Register = () => {
  return (
    <section className="Container">
      <div className="Wrapper">
        <span className="Logo">Lightning</span>
        <span className="Title">Register</span>

        <form className="Form">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <input type="file" />
          <Button>Sign in</Button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </section>
  );
};

export default Register;
