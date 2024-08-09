import React from "react";
import "../styles/DateList.scss";

const DateList = ({ list }) => {
  return (
    <div className="date-list-container">
      {list.map((item, index) => (
        <div key={"row" + index} className="date-list-item">
          <p className="date" key={"date" + index}>
            {item.date}
          </p>
          <p className="description" key={"desc" + index}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DateList;
