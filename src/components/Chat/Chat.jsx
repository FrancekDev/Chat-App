import React from "react";
import Messages from "../Massages/Messages";
import Input from "../Input/Input";
import { randomColor, randomName } from "../../utils/userGenerator";

import "./Chat.scss";
import Navbar from "../Navbar/Navbar";

class Chat extends React.Component {
  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      member: {
        username: this.props.username,
        color: randomColor(),
      },
      members: [],
    };

    this.drone = new window.Scaledrone("ZMug77s8tUiDDJFl", {
      data: this.state.member,
    });

    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }

      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });

      const room = this.drone.subscribe("observable-room");

      room.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        console.log("Successfully joined room");
      });

      room.on("members", (m) => {
        const members = this.state.members;
        members.push({ m });
        this.setState({ members });
      });

      room.on("message", (message) => {
        const { data, id, timestamp, member } = message;
        const messages = this.state.messages;
        messages.push({ member, text: data, id, timestamp });
        this.setState({ messages });
      });
    });
  }

  render() {
    return (
      <>
        <div className="Chat">
          <div className="Chat-Info">
            <span className="Chat-Name">Lightning chat</span>
            <Navbar member={this.state.member} />
          </div>
          <Messages
            messages={this.state.messages}
            currentMember={this.state.member}
          />
          <Input onSendMessage={this.onSendMessage} />
        </div>
      </>
    );
  }
}

export default Chat;
