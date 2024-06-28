"use client";
import { useEffect, useState } from "react";

export default function DynamicArticle({ id }) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`/api/news/${id}`)
      .then((res) => res.json())
      .then(setArticle)
      .catch(() => setArticle(null)); // Handle not found error
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <a href='/'>Back to news</a>
    </div>
  );
}
