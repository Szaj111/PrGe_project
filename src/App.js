import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Login_page from "./components/login_page/Login_page";
import Map from "./components/map/Map";
import Movies_list from "./components/movies_list/Movies_list";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Movies from "./components/movies/Movies";
import Subs_db from "./components/subs_db/Subs_db";
import About from "./components/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/login_page",
    element: <Login_page />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/movies_list",
    element: <Movies_list />,
  },
  {
    path: "/subs_db",
    element: <Subs_db />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
