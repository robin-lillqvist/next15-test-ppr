"use client";
import React from "react";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export default function DynamicNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then(setNews);
  }, []);

  if (news.length === 0) return <div>Loading...</div>;

  return (
    <div>
      {news.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          content={article.content.substring(0, 100) + "..."}
          image='/path/to/default/image.jpg' // Replace with your image logic
          date='June 24, 2024' // Replace with your date logic
          id={article.id}
        />
      ))}
    </div>
  );
}
