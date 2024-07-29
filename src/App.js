import { Component } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { format } from "date-fns";
import Picker from "emoji-picker-react";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { Mention, MentionsInput } from "react-mentions";
import { Button } from "react-bootstrap";
import mentionsStyle from "./mentionsStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const userList = [
  { id: "Alan", display: "Alan" },
  { id: "Bob", display: "Bob" },
  { id: "Carol", display: "Carol" },
  { id: "Dean", display: "Dean" },
  { id: "Elin", display: "Elin" },
];

class App extends Component {
  state = {
    messageList: [],
    inputMessage: "",
    showPicker: false,
  };

  enterKeyPressed = (event) => {
    if (event.key === "Enter") {
      this.sendMessage();
    }
  };

  sendMessage = () => {
    const { messageList, inputMessage } = this.state;

    if (inputMessage.trim()) {
      const newMessage = {
        id: messageList.length,
        username: userList[Math.floor(Math.random() * userList.length)].id,
        userMessage: inputMessage,
        likes: 0,
        time: new Date(),
      };
      this.setState((prevState) => ({
        messageList: [...prevState.messageList, newMessage],
        inputMessage: "",
      }));
    }
  };

  addLikes = (id) => {
    const { messageList } = this.state;
    this.setState({
      messageList: messageList.map((message) =>
        message.id === id && message.likes < userList.length - 1
          ? { ...message, likes: message.likes + 1 }
          : message
      ),
    });
  };

  onEmojiClick = (emojiObject) => {
    console.log(emojiObject);
    this.setState((prevState) => ({
      inputMessage: prevState.inputMessage + emojiObject.emoji,
      showPicker: false,
    }));
  };

  render() {
    const { messageList, inputMessage, showPicker } = this.state;

    return (
      <div className="chat-main-container">
        <div>
          <div className="heading-container">
            <div>
              <h1 className="title-heading">Introductions</h1>
              <p>This Channel is For Company Wide Chatter</p>
            </div>
            <div className="member-count-container">
              <p className="member-count">{userList.length}/100</p>
              <MdGroups size={30} />
            </div>
          </div>
          <hr />
        </div>
        <div>
          <ul className="chat-message-list">
            {messageList.map((message) => {
              return (
                <li key={message.id} className="user-message">
                  <h1 className={`user-profile profile-${message.username}`}>
                    {message.username[0]}
                  </h1>
                  <div>
                    <div className="username-container">
                      <h1 className="username">{message.username}</h1>
                      <p className="message-timestamp">
                        {format(message.time, "HH:mm")}
                      </p>
                    </div>
                    <div className="message-content-container">
                      <p className="each-user-message">{message.userMessage}</p>
                      <Button
                        variant="success"
                        onClick={() => this.addLikes(message.id)}
                        className="like-button"
                      >
                        <BiSolidLike size={20} />
                        <span className="like-count">
                          {message.likes > 0 ? message.likes : ""}
                        </span>
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="emoji-popup-container">
            <Picker open={showPicker} onEmojiClick={this.onEmojiClick} />
          </div>
          <div className="user-input-container">
            <MentionsInput
              className="user-input"
              placeholder="Type Message"
              type="text"
              style={mentionsStyle}
              value={inputMessage}
              onChange={(e) => this.setState({ inputMessage: e.target.value })}
              onKeyDown={this.enterKeyPressed}
            >
              <Mention data={userList} />
            </MentionsInput>
            <FaRegFaceSmileBeam
              className="smile-button"
              size={30}
              onClick={() =>
                this.setState((prevState) => ({
                  showPicker: !prevState.showPicker,
                }))
              }
            />
            <Button
              variant="primary"
              className="send-button"
              onClick={this.sendMessage}
            >
              <BsFillSendFill />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
