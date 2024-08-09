import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Publication from "./Publication";
import styles from "../styles/Publications.module.scss";
import Dropdown from "./Dropdown";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Publications = () => {
  const { data: publications } = useSWR(
    "https://api.zotero.org/groups/5619391/items?format=json&include=bibtex,data",
    fetcher
  );

  const mainPublications = publications
    ?.filter((publication) => publication.data.itemType !== "attachment")
    .sort((a, b) => b.data.date.localeCompare(a.data.date));
  const [filteredPublications, setFilteredPublications] = useState(null);

  const [selectedType, setSelectedType] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const attachments = publications?.filter(
    (publication) => publication.data.itemType === "attachment"
  );

  filteredPublications?.forEach((publication) => {
    const attachment = attachments.find(
      (attachment) => attachment.data.parentItem === publication.data.key
    );
    if (attachment) {
      publication.data.attachment = attachment.data.url;
    }
  });

  const publicationsTypes = mainPublications && [
    "...Type",
    ...new Set(
      mainPublications.map((publication) => publication.data.itemType)
    ),
  ];

  const publicationDates =
    mainPublications &&
    [
      "...Year",
      ...new Set(
        mainPublications.map(
          (publication) => publication.data.date.split("-")[0]
        )
      ),
    ].sort((a, b) => b - a);

  const handleFilter = () => {
    let filteredPublications = mainPublications;

    if (selectedType) {
      filteredPublications = filteredPublications?.filter(
        (publication) => publication.data.itemType === selectedType
      );
    }

    if (selectedYear) {
      filteredPublications = filteredPublications?.filter(
        (publication) => publication.data.date.split("-")[0] === selectedYear
      );
    }
    setFilteredPublications(filteredPublications);
  };

  useEffect(() => {
    handleFilter();
  }, [selectedType, selectedYear]);

  useEffect(() => {
    if (publications) setFilteredPublications(mainPublications);
  }, [publications]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Publications</h2>
      <div className={styles.filters}>
        <Dropdown
          options={publicationsTypes}
          placeholder={"Type"}
          onSelect={setSelectedType}
        />
        <Dropdown
          options={publicationDates}
          placeholder={"Year"}
          onSelect={setSelectedYear}
        />
      </div>
      {filteredPublications?.map((publication, indx) => (
        <>
          <Publication key={"pub-" + indx} publication={publication} />
          {indx < filteredPublications.length - 1 && <hr key={"hr" + indx} />}
        </>
      ))}
    </div>
  );
};

export default Publications;
