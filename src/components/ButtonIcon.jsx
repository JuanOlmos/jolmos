import React from "react";

const ButtonIcon = ({ icon, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};
export default ButtonIcon;
