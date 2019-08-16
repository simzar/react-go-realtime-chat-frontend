import React, { Component } from 'react';
import './App.css';
import {connect, sendMsg} from "./api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chatHistory: [] };
    // connect();
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message");
      this.setState((prevState) => ({
        chatHistory: [...this.state.chatHistory, msg]
      }));
      console.log(this.state);
    })
  }

  send(e) {
    if (e.keyCode === 13) {
      e.target.value.trim() !== "" && sendMsg(e.target.value);
      e.target.value = "";
    }
  }

  render() {
    const { chatHistory } = this.state;

    return (
        <div className="App">
          <Header />
          <ChatHistory chatHistory={chatHistory} />
          <ChatInput send={this.send} />
        </div>
    );
  }

}

export default App;
