import React from "react";
import PropTypes from "prop-types";

import "./Messages.scss";

const Messages = (props) => {
  const renderMessage = (message) => {
    const { member, text, id, timestamp } = message;
    const { currentMember } = props;

    const messageFromMe = member.id === currentMember.id;
    const messageWrapper = messageFromMe ? "Message Message_Owner" : "Message";
    const messageText = messageFromMe
      ? "Message_Owner-ContentText"
      : "Message-ContentText";

    return (
      <ul key={id}>
        <li className={messageWrapper}>
          <div className="Message-Info">
            <span
              className="Message-Img"
              style={{ backgroundColor: member.clientData.color }}
            />
            <span className="Message-Time">{timestamp}</span>
          </div>
          <div className="Message-Content">
            <p className="Message-ContentUsername">
              {member.clientData.username}
            </p>
            <p className={messageText}>{text}</p>
          </div>
        </li>
      </ul>
    );
  };

  const { messages } = props;
  return (
    <div className="Messages">{messages.map((m) => renderMessage(m))}</div>
  );
};

Messages.propTypes = {
  currentMember: PropTypes.object,
};

export default Messages;
