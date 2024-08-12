import { useDispatch, useSelector } from "react-redux";
import { toggleMenu ,toggleDarkMode} from "../utils/appSlice";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_API } from "../utils/Constant";
import { cache } from "../utils/searchSlice";


import { FilterParams } from "../utils/filterSlice";

const Headers = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cachedSuggestions = useSelector((store) => store.search);
  const [query,setQuery]=useState("")
  const isDark=useSelector((store)=>store.app.isDark)
  const handleClick = () => {
    dispatch(FilterParams(query));
  
  };
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    dispatch(FilterParams(suggestion));
    setShowSuggestions(false); // Hide suggestions after selecting one
  };
  useEffect(() => {
    const apiMakeTime = setTimeout(() => {
      if (cachedSuggestions[searchQuery]) {
        setSuggestions(cachedSuggestions[searchQuery]);
      } else if (searchQuery.trim()) {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(apiMakeTime);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(SEARCH_SUGGESTION_API + searchQuery)}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const json = JSON.parse(data.contents);  // Parsing the content from the proxy response
    setSuggestions(json[1]);
    setQuery(searchQuery);
    dispatch(cache({ [searchQuery]: json[1] }));
  };

  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleTheme=()=>{
    dispatch(toggleDarkMode())
  }
  return (
    <div className={`flex items-center justify-between p-4 ${isDark?"bg-black":"bg-white"} shadow-lg fixed w-full z-50`}>
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
        <button 
          className="absolute right-0 top-0 h-full px-4 text-white bg-blue-500 rounded-r-full transition-colors hover:bg-blue-600" 
         onClick={handleClick}
        >
          Search
        </button>
        {showSuggestions && searchQuery && (
          <div className="absolute top-12 left-0 right-0 border border-gray-300 bg-white shadow-lg rounded-lg z-10">
            <ul>
              {suggestions.map((el) => (
              
                <li key={el} className="px-4 py-2 hover:bg-gray-100 cursor-pointer"  onMouseDown={()=>handleSuggestionClick(el)}>
                  {el}
                </li>
              
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <button className={`m-2 p-2 border border-black rounded-lg ${isDark?"bg-white":"bg-slate-500"}`} onClick={handleTheme}>
{isDark?" Light 🌞":" Dark 🌚"}
        </button>
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
