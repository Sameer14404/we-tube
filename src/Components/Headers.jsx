import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_API } from "../utils/Constant";
import { cache } from "../utils/searchSlice";
import store from "../utils/store";

const Headers = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const check=useSelector(store=>store.search)

  useEffect(() => {
    const apiMakeTime = setTimeout(() => {
      if (check[searchQuery]) {
        setSuggestions(check[searchQuery])
      }
      else{
        getSearchSuggestions()
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
    dispatch(cache({[searchQuery]:suggestions}))
  };

  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-3 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256"
          alt="menu-img"
          className="h-9 cursor-pointer"
          onClick={handleMenu}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8xEWKiTMYig_ewmAgDobsw_ddFKZe0iO-A&s"
          alt="youtube-logo"
          className="h-9 mx-2"
        />
      </div>
      <div className="col-span-10 relative flex justify-center">
        <div className="w-full max-w-md relative">
          <input
            type="text"
            className="w-full h-10 rounded-l-full border border-gray-400 pl-4 pr-10 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="absolute right-0 top-0 h-full bg-gray-500 rounded-r-full px-4 text-white">
            Search
          </button>
          {showSuggestions && searchQuery && (
            <div className="absolute top-12 left-0 right-0 border border-gray-400 py-2 shadow-lg rounded-lg bg-white z-10">
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
      </div>
      <div className="col-span-1 flex justify-end items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCS3uMVc54NYJHXFUSIUFZrI3Zp00EZ6KcA&s"
          alt=""
          className="h-9"
        />
      </div>
    </div>
  );
};

export default Headers;
