import React from 'react'
import { useSelector } from 'react-redux';

 const SeachList = ({result }) => {
  const isDark = useSelector((store) => store.app.isDark);
  return (
    <div
    key={result.id.videoId}
    className={`flex flex-col md:flex-row md:space-x-4 border p-4 rounded-lg cursor-pointer`}


  >
    <img
      className="w-full md:w-60 lg:w-72 h-32 md:h-24 lg:h-40 object-cover rounded"
      src={result.snippet.thumbnails.medium.url}
      alt={result.snippet.title}
    />
    <div className="flex flex-col mt-2 md:mt-0">
      <h2 className="text-xl font-bold">{result.snippet.title}</h2>
      <p className="text-sm text-gray-500">{result.snippet.channelTitle}</p>
      <p className="mt-1 text-gray-700 line-clamp-2">{result.snippet.description}</p>
      <p className="mt-1 text-xs text-gray-500">{new Date(result.snippet.publishedAt).toLocaleDateString()}</p>
      <p className="mt-1 text-xs text-gray-500">Video ID: {result.id.videoId}</p>
    </div>
  </div>
  )
}
export  default SeachList;