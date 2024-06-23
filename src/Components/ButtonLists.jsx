import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const youtubeButtonNames = [
    "All", "Gaming", "Movies", "Music", "Live", "Sports", "News", "Learning",
   "Comedy", "Travel", "Food", "Science & Technology",
    
  ];

  return (
    <div className="relative">
      <div className="flex overflow-x-auto p-4 space-x-2">
        {youtubeButtonNames.map((el) => <Button key={el} name={el} />)}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-2">
        <div className="bg-white w-10 h-1 rounded-full"></div>
      </div>
    </div>
  );
};

export default ButtonList;
