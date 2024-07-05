import React, { useEffect, useState } from "react";
import { SEARCH_API, YOUTUBE_VIDIEOS_APi } from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchResults from "./SearchResult";
import Shimmer from "./Shimmer";
const VideoContainer = () => {
  
  const [videos, setVideos] = useState([]);
  const query=useSelector((store)=>store.filter.Params);
  let api=query===""?YOUTUBE_VIDIEOS_APi:`${SEARCH_API}${query}`;

  const getVideos = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setVideos(data.items);
  };

  useEffect(() => {
    getVideos();
  }, [query]);



  return (query==""?(
    <div className="p-4 overflow-y-auto h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((el) => (
          <Link to={`watch/v/${el.id}`} key={el.id}>
            <VideoCard info={el} key={el.id} />
          </Link>
        ))}
      </div>
    </div>
  ):<SearchResults results={videos}  />)
};

export default VideoContainer;