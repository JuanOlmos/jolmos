import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Publications from "./components/Publications";
import App from "./App";

const ExternalPage = () => {
  window.location.href =
    "https://jo-c-docs-bucket.s3.us-east-2.amazonaws.com/2024_CV_eng.pdf";
  return null;
};

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
      {
        path: "/cv",
        element: <ExternalPage />,
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
