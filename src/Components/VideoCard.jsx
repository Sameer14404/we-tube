import React from "react";

const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover sm:h-32 md:h-40 lg:h-48"
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="p-4">
        <h3 className="font-bold text-md truncate">{title}</h3>
        <p className="text-sm text-gray-500">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
