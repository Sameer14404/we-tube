import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice"; // Make sure this path is correct
import { useParams } from "react-router-dom";
import CommentConatiners from "./CommentConatiners";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]); // Add dispatch to the dependency array

  return (
    <div className="p-5 flex w-full  ">
      <div>
        <iframe
          width="700px"
          height="300px"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen // Use camelCase for this attribute
        ></iframe>
        <CommentConatiners />
      </div>
      <div className="w-full">
        <LiveChat/>
      </div>
    </div>
  );
};

export default WatchPage;
