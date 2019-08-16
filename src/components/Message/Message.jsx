import React, {Component} from "react";
import "./Message.scss";

class Message extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.message);
        const message = JSON.parse(this.props.message);
        this.state = {
            message
        };
    }

    render() {
        const {message} = this.state;
        return (
            <div className="Message">
                {message.body}
            </div>
        );
    }
}

export default Message;
