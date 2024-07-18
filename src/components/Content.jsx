import React from "react";
import ListComponent from "./ListComponent";
import "../styles/Content.css";
import { RiGraduationCapFill } from "react-icons/ri";
import DateList from "./DateList";

const Content = () => {
  let text =
    "Gesetz steht, entritt nich das más vaca que porta que pasaba enstehn así entejas doch, treten könne. Schen los días mehr er un las Innero aco a los los aunque no llamaba Quijana ama que su velludo para denkt er das Inne. Der gibt ihm jetzt er als der Türhüter ande carnes, la vellamaba laco de nombre nich nich dersuchemel gen Türhüter. Zu dich bin Mancha, rostro, y als de la Mancha, que nich, domino.";

  let education = [
    {
      main: "PhD in Computer Science",
      secondary: "Universidad Industrial de Santander",
    },
    {
      main: "MSc. in Applied Mathematics",
      secondary: "Universidad Industrial de Santander",
    },
    {
      main: "BSc. in Mathematics",
      secondary: "Universidad Industrial de Santander",
    },
  ];

  let interests = [{ main: "Mathematics" }, { main: "Programming" }];

  let dateList = [
    {
      date: "2021-01-01",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      date: "2021-02-01",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      date: "2021-03-01",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="content">
      <p>{text}</p>
      <div className="lists">
        <ListComponent
          title="Education"
          list={education}
          icon={<RiGraduationCapFill style={{ paddingRight: "15px" }} />}
        />

        <ListComponent title="Interests" list={interests} />
      </div>
      <hr />
      <h2>News</h2>
      <DateList list={dateList} />
    </div>
  );
};

export default Content;
