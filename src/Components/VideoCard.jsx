import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { thumbnails, title, channelTitle } = snippet;
  const isDark=useSelector((store)=>store.app.isDark)
  return (
    <div className={`${isDark?"bg-slate-400":"bg-white"} rounded-lg shadow-md overflow-hidden`}>
      <div className="relative pb-56.25%">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={thumbnails.medium.url}
          alt={title}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-md truncate">{title}</h3>
        <p className="text-sm text-gray-500">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
