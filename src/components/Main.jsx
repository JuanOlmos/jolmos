import React from "react";
import Profile from "./Profile";
import Content from "./Content";
import "../styles/Main.css";

export const Main = () => {
  return (
    <div className="main-container">
      <Profile />
      <Content />
    </div>
  );
};
