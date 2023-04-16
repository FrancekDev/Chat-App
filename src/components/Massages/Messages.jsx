import React from "react";
import "./Messages.scss";

const Messages = (props) => {
  const renderMessage = (message) => {
    const { member, text } = message;
    const { currentMember } = props;

    const messageFromMe = member.id === currentMember.id;
    const messageWrapper = messageFromMe ? "Message Message_Owner" : "Message";
    const messageText = messageFromMe
      ? "Message_Owner-ContentText"
      : "Message-ContentText";

    return (
      <>
        <li className={messageWrapper}>
          <div className="Message-Info">
            <span
              className="Message-Img"
              style={{ backgroundColor: member.clientData.color }}
            />
          </div>
          <div className="Message-Content">
            <p className="Message-ContentUsername">
              {member.clientData.username}
            </p>
            <p className={messageText}>{text}</p>
          </div>
        </li>
      </>
    );
  };

  const { messages } = props;
  return (
    <div className="Messages">
      <ul>{messages.map((m, id) => renderMessage(m, id))}</ul>
    </div>
  );
};

Messages.propTypes = {};

export default Messages;
