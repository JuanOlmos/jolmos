import React from "react";
import DateList from "./DateList";
import { NEWS } from "../utils/Constants";

const News = () => {
  return (
    <div>
      <hr />
      <h2>News</h2>
      <DateList list={NEWS} />{" "}
    </div>
  );
};

export default News;
