import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import LiveChat from "./LiveChat";
import CommentContainers from "./CommentConatiners";
import SearchResults from "./SearchResult";


const SearchWatchPage = () => {
  const { id } = useParams();
const navigate=useNavigate()
  const dispatch = useDispatch();

  const query=useSelector((store)=>store.filter.Params)
  const isDark=useSelector((store)=>store.app.isDark)
  useEffect(() => {
    dispatch(closeMenu());
  
  }, [id,query]);


  return (
    <div className={`flex flex-col lg:flex-row p-5 space-y-5 lg:space-y-0 lg:space-x-5 w-full ${isDark?"bg-black":"bg-white"}`}>
      <div className="flex-1">
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
        <CommentContainers />
      </div>
      <div className="lg:w-1/3 w-full">
        <LiveChat />
      </div>
    </div>
  );
};

export default SearchWatchPage;
