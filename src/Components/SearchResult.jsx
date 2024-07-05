import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SeachList from "./SeachList";

const SearchResults = ({ results }) => {
  const [id, setId] = useState(null);
  const query = useSelector((store) => store.filter.Params);
  const isDark = useSelector((store) => store.app.isDark);
  const navigate = useNavigate();

  const handleClick = (videoId) => {
    setId(videoId);
    navigate(`/watch/v/search/${videoId}`);
  };
 useEffect(()=>{},[query])
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Search Results for "{query}"</h1>
      <div className={`space-y-4 overflow-y-auto max-h-screen ${isDark ? "bg-gray" : "bg-white"}`}>
        {results && results.length > 0 ? (
          results.map((result) => (
            <div key={result.id.videoId} onClick={() => handleClick(result.id.videoId)}>
              <SeachList result={result} />
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
