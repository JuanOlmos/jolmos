import React from "react";
import Button from "react-bootstrap/Button";

const Publication = ({
  title,
  authors,
  date,
  publisher,
  code,
  site,
  image,
  type,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{authors}</p>
      <p>{date}</p>
      <p>{publisher}</p>
      <Button variant="outline-primary">code</Button>
    </div>
  );
};

export default Publication;
