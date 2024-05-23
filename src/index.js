import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
const router = createBrowserRouter([
    {
       path: "/",
       element: <Home />
    },
    {
        path: "/about",
        element: <About />
      },
      {
        path: "/login",
        element: <Login />
      }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);