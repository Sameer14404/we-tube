import { Provider } from "react-redux";
import Headers from "./Components/Headers"
import "./App.css";
import Body from "./Components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainConatiner from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

function App() {
  const AppRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainConatiner/>
      },
      {
        path:"/watch/v/:id",
        element:<WatchPage/>
      }
    ]
  }])
  return (
    <>
      <div>
        <Provider store={store}>
          <Headers/>
          <RouterProvider router={AppRouter}/>
        </Provider>
      </div>
    </>
  );
}

export default App;
