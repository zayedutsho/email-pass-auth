import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import OutLet from "./Components/Layout/OutLet.jsx";

import Home from "../src/Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutLet></OutLet>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
