// app/components/ArticleCard.js
import React from "react";
import styles from "./ArticleCard.module.css";

export default function ArticleCard({ title, content, image, date, id }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>{date}</p>
        <p className={styles.text}>{content}</p>
        <a href={`/news/${id}`} className={styles.link}>
          read more...
        </a>
      </div>
    </div>
  );
}
