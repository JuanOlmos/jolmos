import React from "react";
import useSWR from "swr";
import Publication from "./Publication";
import styles from "../styles/Publications.module.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Publications = () => {
  const { data: publications } = useSWR(
    "https://api.zotero.org/groups/5619391/items?format=json&include=bibtex,data",
    fetcher
  );

  const filteredPublications = publications?.filter(
    (publication) => publication.data.itemType !== "attachment"
  );

  const attachments = publications?.filter(
    (publication) => publication.data.itemType === "attachment"
  );

  filteredPublications &&
    filteredPublications.forEach((publication) => {
      const attachment = attachments.find(
        (attachment) => attachment.data.parentItem === publication.data.key
      );
      if (attachment) {
        publication.data.attachment = attachment.data.url;
      }
    });

  console.log(filteredPublications);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Publications</h2>
      {filteredPublications &&
        filteredPublications.map((publication, indx) => (
          <>
            <Publication key={"pub-" + indx} publication={publication} />
            {indx < filteredPublications.length - 1 && <hr key={"hr" + indx} />}
          </>
        ))}
    </div>
  );
};

export default Publications;
