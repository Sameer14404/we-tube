
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;
    return (
        <div className="p-5 shadow-lg w-60 bg-gray-800 text-white h-full">
            <h1 className="text-lg font-bold mb-4">Subscription</h1>
            <ul className="mb-8">
                <li className="mb-2">Music</li>
                <li className="mb-2">Sports</li>
                <li className="mb-2">Gaming</li>
                <li className="mb-2">Movies</li>
            </ul>
            <h1 className="text-lg font-bold mb-4">Trending</h1>
            <ul className="mb-8">
                <li className="mb-2">Latest</li>
                <li className="mb-2">Popular</li>
                <li className="mb-2">Trending Now</li>
                <li className="mb-2">Top Charts</li>
            </ul>
            <h1 className="text-lg font-bold mb-4">Library</h1>
            <ul className="mb-8">
                <li className="mb-2">History</li>
                <li className="mb-2">Watch Later</li>
                <li className="mb-2">Liked Videos</li>
                <li className="mb-2">Playlists</li>
            </ul>
            <h1 className="text-lg font-bold mb-4">Categories</h1>
            <ul>
                <li className="mb-2">Comedy</li>
                <li className="mb-2">Education</li>
                <li className="mb-2">Science & Tech</li>
                <li className="mb-2">Travel</li>
            </ul>
        </div>
    );
}

export default Sidebar;
