import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaGoogleScholar,
  FaXTwitter,
} from "react-icons/fa6";

import { CiMail } from "react-icons/ci";
import ButtonIcon from "./ButtonIcon";
import "../styles/Icons.css";
import "../styles/constants.css";
const Icons = () => {
  let icons = [
    {
      icon: <FaLinkedin color="#b3a2ff" size={35} />,
      href: "https://www.linkedin.com/in/juan-olmos/",
    },
    {
      icon: <FaGoogleScholar color="#b3a2ff" size={35} />,
      href: "https://scholar.google.com/citations?user=JJJjQMcAAAAJ&hl=es&oi=sra",
    },
    {
      icon: <FaGithub color="#b3a2ff" size={35} />,
      href: "https://github.com/JuanOlmos",
    },
    {
      icon: <CiMail color="#b3a2ff" size={35} />,
      href: "mailto:jaolmosr@correo.uis.edu.co",
    },
    {
      icon: <FaXTwitter color="#b3a2ff" size={35} />,
      href: "https://twitter.com/juanolmosr",
    },
  ];

  return (
    <div className="icons">
      {icons.map((icon) => {
        return <ButtonIcon icon={icon.icon} href={icon.href} />;
      })}
    </div>
  );
};

export default Icons;
