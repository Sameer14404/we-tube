import { useSelector } from "react-redux";
import ButtonLists from "./ButtonLists";
import SearchResults from "./SearchResult";
import VideoContainer from "./VideoContainer";


const MainConatiner=()=>{
    const isDark=useSelector((store)=>store.app.isDark)
    return(
        <div className={`mt-14 ${isDark?"bg-black":"bg-white"}`}>
            
            <ButtonLists/>
            <VideoContainer/>
            
        </div>
    )
}
export default MainConatiner;