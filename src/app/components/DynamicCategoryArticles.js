"use client";
import { useEffect, useState } from "react";

export default function DynamicCategoryArticles({ id }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`/api/category/${id}/articles`)
      .then((res) => res.json())
      .then(setArticles);
  }, [id]);

  if (articles.length === 0) return <div>Loading...</div>;

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}
