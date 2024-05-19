import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Login_page from "./components/login_page/Login_page";
import Map from "./components/map/Map";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login_page/services",
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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
