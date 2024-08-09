import React, { Fragment } from "react";
import "../styles/ListComponent.scss";

const ListComponent = ({ title, list, icon }) => {
  return (
    <div key={title} className="list">
      <h2 key={"title-" + title}>{title}</h2>
      <ul
        key={"list-" + title}
        style={icon && { listStyle: "none", paddingLeft: 0 }}
      >
        {list &&
          list.map((item, indx) => {
            return (
              <li key={title + "-" + indx}>
                {icon && <Fragment key={"icon" + indx}> {icon}</Fragment>}

                {item.main}

                {item.secondary && (
                  <>
                    <br />
                    <small>{item.secondary}</small>
                  </>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ListComponent;
