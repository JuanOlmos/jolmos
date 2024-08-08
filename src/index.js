import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Publications from "./components/Publications";
import App from "./App";

const router = createHashRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/publications",
        element: <Publications />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

function NavbarWrapper() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
