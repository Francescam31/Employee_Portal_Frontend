import React, { useState } from "react";

const Messages = () => {

    const [message, setMessage] = useState({
        text: "We are commited to net 0 emissions by 2089",
        author: "Ceo"
    });

    const fetchMessage = async () => {
        const response = await fetch("http://localhost:8080/messages");
        // const number = Math.floor(Math.random() * (max - min + 1) + min);
        const messageData = await response.json();
        setMessage();
    }
    console.log(message);

    return(
        <div className="notification">
            <h2>Messages Page</h2>
            <p>Notification</p>
            <div className="message"> text: {message.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">author: {message.author}</div>
                </div>
            </div>
        </div>
    )
}

export default Messages