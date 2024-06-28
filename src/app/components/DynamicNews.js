"use client";
import React from "react";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import ArticleContainer from "./ArticleContainer";

export default function DynamicNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then(setNews);
  }, []);

  if (news.length === 0) return <div>Loading...</div>;

  return (
    <ArticleContainer>
      {news.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          content={article.content.substring(0, 100) + "..."}
          image={article.image} // Replace with your image logic
          date={article.date} // Replace with your date logic
          id={article.id}
        />
      ))}
    </ArticleContainer>
  );
}
