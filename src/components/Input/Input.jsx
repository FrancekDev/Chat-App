import React from "react";
import "./Input.scss";
import Button from "../Button/Button";
import { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    onSendMessage(text);
  };

  return (
    <div>
      <form className="Input" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          className="Input-Text"
          type="text"
          placeholder="Enter your message here..."
          autoFocus
        />
        <div className="Input-Send">
          <Button isSend>Send</Button>
        </div>
      </form>
    </div>
  );
};

Input.propTypes = {
  onSendMessage: PropTypes.func,
};

export default Input;
