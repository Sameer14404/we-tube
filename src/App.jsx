import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchWatchPage from "./Components/SearchWatchPage";

const Headers = lazy(() => import("./Components/Headers"));
const Body = lazy(() => import("./Components/Body"));
const MainContainer = lazy(() => import("./Components/MainContainer"));
const WatchPage = lazy(() => import("./Components/WatchPage"));
const SearchResults = lazy(() => import("./Components/SearchResult"));

function App() {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element:(<>
      <Headers/>
      <Body/>
      </>),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch/v/:id",
          element: <WatchPage />,
        },
        {
          path: "/search",
          element: <SearchResults />,
        },
      
        {
          path: "/watch/v/search/:id",
          element: <SearchWatchPage />,
        },
       

      ],
    },
  ]);

  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Headers />
        <RouterProvider router={AppRouter} />
      </Suspense>
    </Provider>
  );
}

export default App;
