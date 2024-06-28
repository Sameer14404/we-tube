import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveChatSlice";
import randomComment from "../utils/Helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
    const dispatch = useDispatch();
    const messages = useSelector((store) => store.chat.messages.slice(-10));
    const chatEndRef = useRef(null);
    const [chatInput, setChatInput] = useState("");

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

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (chatInput.trim() !== "") {
            dispatch(addMessage({ name: "Sameer Dangi", comment: chatInput }));
            setChatInput("");
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-grow p-5 border border-black overflow-y-auto">
                <h1 className="text-lg font-semibold mb-4">Live Chat</h1>
                <div className="flex flex-col-reverse space-y-2">
                    {messages.map((message, index) => (
                        <ChatMessage key={index} name={message.name} comment={message.comment} />
                    ))}
                    <div ref={chatEndRef} /> {/* Dummy div for scrolling to bottom */}
                </div>
            </div>
            <form onSubmit={handleSendMessage} className="mt-4 p-2">
                <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type your message"
                    className="border p-2 w-full"
                />
                <button type="submit" className="mt-2 w-full p-2 bg-blue-500 text-white rounded">
                    Send
                </button>
            </form>
        </div>
    );
};

export default LiveChat;
