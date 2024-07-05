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

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Headers />
        <Body />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MainContainer />
          </Suspense>
        ),
      },
      {
        path: "/watch/v/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SearchResults />
          </Suspense>
        ),
      },
      {
        path: "/watch/v/search/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SearchWatchPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  );
}

export default App;
