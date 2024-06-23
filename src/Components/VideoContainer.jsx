import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDIEOS_APi } from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getvideo = async () => {
    const ans = await fetch(YOUTUBE_VIDIEOS_APi);
    const data = await ans.json();
    setVideos(data.items);
  };

  useEffect(() => {
    getvideo();
  }, []);

  
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((el) => (
         <Link to={`watch/v/${el.id}`} key={el.id}> <VideoCard key={el.id} info={el} /></Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
