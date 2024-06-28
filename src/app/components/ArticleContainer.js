import React from "react";
import styles from "./ArticleContainer.module.css";

export default function ArticleContainer({ children }) {
  return <div className={styles.articleContainer}>{children}</div>;
}
