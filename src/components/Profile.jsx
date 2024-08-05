import React from "react";
import profilePic from "../profile.png";
import "../styles/Profile.css";
import Icons from "./Icons";

const Profile = () => {
  return (
    <>
      <div className="container">
        <img src={profilePic} className="profile-pic" alt="" />
        <h1 className="title">Juan Olmos</h1>
        <h3 className="job-title">PhD Student</h3>
        <a
          className="link"
          href="https://uis.edu.co/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universidad Industrial de Santander
        </a>
        <hr className="break-line" />
        <a
          className="link"
          href="https://www.ip-paris.fr/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Institut Polytechnique de Paris
        </a>
        <Icons />
      </div>
    </>
  );
};

export default Profile;
