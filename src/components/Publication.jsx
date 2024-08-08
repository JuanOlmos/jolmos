import React, { useState } from "react";
import styles from "../styles/Publication.module.scss";
import Button from "./Button";
import { formatDate, parseBibTeX } from "../utils/Format";
import CitationModal from "./CitationModal";

const Publication = ({ publication }) => {
  const [showCiteModal, setShowCiteModal] = useState(false);

  const {
    title,
    creators,
    date,
    conferenceName,
    publicationTitle,
    key,
    attachment,
    DOI,
    shortTitle: code,
  } = publication.data;
  const { bibtex: cite } = publication;
  const { href } = publication.links.self;
  const downloadURL = href + "?format=bibtex";
  const authors =
    creators &&
    creators
      .filter((creator) => creator.creatorType === "author")
      .map((author) => author.firstName + " " + author.lastName)
      .join(", ");

  const publisher = conferenceName || publicationTitle;

  return (
    <div key={key + "card"} className={styles.card}>
      <div key={key + "publication"} className={styles.publication}>
        <h3 key={key + "title"} className={styles.title}>
          {title}
        </h3>
        <p key={key + "authors"} className={styles.authors}>
          {authors}
        </p>
        <p key={key + "date"} className={styles.date}>
          {formatDate(date)}
          <span>{"\u00b7"}</span>
          {publisher}
        </p>
        <div className={styles.buttons}>
          {DOI && <Button title={"PDF"} url={"https://doi.org/" + DOI} />}
          {code && <Button title={"Code"} url={code} />}
          {cite && (
            <>
              <Button title={"Cite"} onClick={() => setShowCiteModal(true)} />
              <CitationModal
                show={showCiteModal}
                onClose={() => setShowCiteModal(false)}
                cite={parseBibTeX(cite)}
                downloadURL={downloadURL}
              />
            </>
          )}
        </div>
      </div>
      {attachment && (
        <img
          key={key + "attachmentImg"}
          src={attachment}
          alt={title}
          className={styles.attachment}
        />
      )}
    </div>
  );
};

export default Publication;
