import React from 'react';

const ChatMessage = ({ name, comment }) => {
    const avatar = "https://cdn.iconscout.com/icon/free/png-256/free-avatar-372-456324.png";

    return (
        <div className="flex items-start p-3 m-3 bg-white shadow-md rounded-lg max-w-md">
            <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full" />
            <div className="ml-4">
                <div className="flex items-center">
                    <span className="font-bold text-gray-900">{name}</span>
                </div>
                <p className="mt-1 text-gray-700">{comment}</p>
            </div>
        </div>
    );
};

export default ChatMessage;
