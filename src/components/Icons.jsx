import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaGoogleScholar,
  FaXTwitter,
} from "react-icons/fa6";

import { CiMail } from "react-icons/ci";
import ButtonIcon from "./ButtonIcon";
import "../styles/Icons.scss";

const Icons = () => {
  let icons = [
    {
      name: "Mail",
      icon: <CiMail color="#b3a2ff" size={35} />,
      href: "mailto:jaolmosr@correo.uis.edu.co",
    },
    {
      name: "GoogleScholar",
      icon: <FaGoogleScholar color="#b3a2ff" size={35} />,
      href: "https://scholar.google.com/citations?user=JJJjQMcAAAAJ&hl=es&oi=sra",
    },
    {
      name: "Github",
      icon: <FaGithub color="#b3a2ff" size={35} />,
      href: "https://github.com/JuanOlmos",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin color="#b3a2ff" size={35} />,
      href: "https://www.linkedin.com/in/juan-olmos/",
    },
    {
      name: "X",
      icon: <FaXTwitter color="#b3a2ff" size={35} />,
      href: "https://twitter.com/juanolmosr",
    },
  ];

  return (
    <div key="icons" className="icons">
      {icons &&
        icons.map((icon) => {
          return (
            <ButtonIcon key={icon.name} icon={icon.icon} href={icon.href} />
          );
        })}
    </div>
  );
};

export default Icons;
