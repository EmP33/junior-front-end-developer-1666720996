import React from "react";
import styles from "./ContextCard.module.scss";
import {
  getMonthShortcut,
  addZeroToDate,
  formatDisplayData,
} from "../../utils/date-formaters";

const ContextCard = ({ context: { title, content, author, created_at } }) => {
  /* Creating a new date object from the created_at property. */
  const displayedDate = formatDisplayData(created_at);
  return (
    <div className={`${styles.card} ${styles.active}`}>
      <div className={styles.cardHeading}>
        <span className={styles.new}>NEW</span>
        <span>{author}</span>
        <span className={styles.dot}></span>
        <span>
          {getMonthShortcut(displayedDate)}{" "}
          {addZeroToDate(displayedDate.getDate())}
        </span>
      </div>
      <h4>{title}</h4>
      <p>{content.slice(0, 100)}...</p>
    </div>
  );
};

export default ContextCard;
