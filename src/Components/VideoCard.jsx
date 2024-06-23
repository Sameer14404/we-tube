import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics, id } = info;
  const { thumbnails, title } = snippet;
  const { commentCount, likeCount, viewCount } = statistics;

  return (
    <div className="relative flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={thumbnails.high.url}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg hover:opacity-75 transition-opacity duration-300"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="text-sm text-gray-600">
          <p>Views: {viewCount}</p>
          <p>Likes: {likeCount} 👍</p>
          <p>Comments: {commentCount} 💬</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
