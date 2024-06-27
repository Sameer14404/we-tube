import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveChatSlice";
import randomComment from "../utils/Helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
    const dispatch = useDispatch();
    const messages = useSelector((store) => store.chat.messages);
    const chatEndRef = useRef(null);

    // Scroll to bottom on new message
    const scrollToBottom = () => {
        chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    // Effect to add new messages
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addMessage(randomComment()));
        }, 2000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [dispatch]);

    useEffect(() => {
        scrollToBottom(); // Scroll to bottom on component mount
    }, [messages]); // Scroll whenever messages change

    return (
        <div className="ml-2 p-5 border border-black h-[400px] overflow-y-auto">
            <h1>LiveChat</h1>
            <div className="flex flex-col-reverse space-y-2">
                {messages.map((message, index) => (
                    <ChatMessage key={index} name={message.name} comment={message.comment} />
                ))}
                <div ref={chatEndRef} /> {/* Dummy div for scrolling to bottom */}
            </div>
        </div>
    );
};

export default LiveChat;
