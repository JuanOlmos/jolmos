import React from "react";
import ListComponent from "./ListComponent";
import "../styles/Content.css";
import { RiGraduationCapFill } from "react-icons/ri";
import DateList from "./DateList";
import { CONTENT, EDUCATION, INTERESTS, NEWS } from "../utils/Constants";

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
      <hr />
      <h2>News</h2>
      <DateList list={NEWS} />
    </div>
  );
};

export default Content;
