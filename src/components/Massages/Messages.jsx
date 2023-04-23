import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./Messages.scss";

const Messages = ({ messages, currentMember }) => {
  const renderMessage = (message) => {
    const { member, text, id, timestamp } = message;

    const time = moment(timestamp * 1000).format("HH:mm");

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
            <span className="Message-Time">{time}</span>
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

  return (
    <div className="Messages">{messages.map((m) => renderMessage(m))}</div>
  );
};

Messages.propTypes = {
  messages: PropTypes.array,
  currentMember: PropTypes.object,
};

export default Messages;
