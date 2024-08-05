import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./components/Main";
import Navbar from "./components/Navbar";
import Publications from "./components/Publications";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Main />,
  },
  {
    path: "/publications",
    element: <Publications />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
