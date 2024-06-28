import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDIEOS_APi } from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDIEOS_APi);
    const data = await response.json();
    setVideos(data.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="p-4 overflow-y-auto h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((el) => (
          <Link to={`watch/v/${el.id}`} key={el.id}>
            <VideoCard info={el} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
