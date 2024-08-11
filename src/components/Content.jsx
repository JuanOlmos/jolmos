import React from "react";
import ListComponent from "./ListComponent";
import "../styles/Content.scss";
import { RiGraduationCapFill } from "react-icons/ri";
import { CONTENT, EDUCATION, INTERESTS } from "../utils/Constants";

const Content = () => {
  return (
    <div className="content">
      <p>{CONTENT}</p>
      <div className="lists">
        <ListComponent
          title="Education"
          list={EDUCATION}
          icon={<RiGraduationCapFill style={{ paddingRight: "15px" }} />}
        />

        <ListComponent title="Interests" list={INTERESTS} />
      </div>
    </div>
  );
};

export default Content;
