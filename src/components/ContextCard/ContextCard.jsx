import React from "react";
import styles from "./ContextCard.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMonthShortcut,
  addZeroToDate,
  formatDisplayData,
} from "../../utils/date-formatters";

const ContextCard = ({
  context: { title, content, author, created_at, status, slug: contextSlug },
}) => {
  const navigate = useNavigate();
  const { slug, contextSlug: paramsContextSlug } = useParams();
  /* Creating a new date object from the created_at property. */
  const displayedDate = formatDisplayData(created_at);

  return (
    <div
      className={`${styles.card} ${
        paramsContextSlug === contextSlug ? styles.active : styles[status]
      }`}
      onClick={() => navigate(`/${slug}/tasks/${contextSlug}`)}
    >
      <div className={styles.cardHeading}>
        {status === "unread" && <span className={styles.new}>NEW</span>}

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
