import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_API } from "../utils/Constant";
import { cache } from "../utils/searchSlice";
import { Link } from "react-router-dom";
const Headers = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cachedSuggestions = useSelector((store) => store.search);

  useEffect(() => {
    const apiMakeTime = setTimeout(() => {
      if (cachedSuggestions[searchQuery]) {
        setSuggestions(cachedSuggestions[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(apiMakeTime);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(`${SEARCH_SUGGESTION_API}${searchQuery}`);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cache({ [searchQuery]: suggestions }));
  };

  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-lg fixed w-full z-50">
      <div className="flex items-center space-x-4">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256"
          alt="menu-img"
          className="h-8 cursor-pointer transition-transform transform hover:scale-110"
          onClick={handleMenu}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8xEWKiTMYig_ewmAgDobsw_ddFKZe0iO-A&s"
          alt="youtube-logo"
          className="h-8 transition-transform transform hover:scale-110"
        />
      </div>
      <div className="relative flex-grow mx-4">
        <input
          type="text"
          className="w-full h-10 rounded-full border border-gray-300 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          placeholder="Search"
        />
        <button className="absolute right-0 top-0 h-full px-4 text-white bg-blue-500 rounded-r-full transition-colors hover:bg-blue-600">
          Search
        </button>
        {showSuggestions && searchQuery && (
          <div className="absolute top-12 left-0 right-0 border border-gray-300 bg-white shadow-lg rounded-lg z-10">
            <ul>
              {suggestions.map((el) => (
                <li key={el} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  {el}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCS3uMVc54NYJHXFUSIUFZrI3Zp00EZ6KcA&s"
          alt="user-avatar"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Headers;
