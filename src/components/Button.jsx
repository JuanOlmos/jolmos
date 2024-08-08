import React from "react";
import styles from "../styles/Button.module.scss";

const Button = ({ title, url, onClick }) => {
  const handleClick = () => {
    if (url) window.open(url, "_blank");
    else onClick();
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
