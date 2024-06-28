// app/api/news/[id]/route.js
import { newsArticles } from "../../mockData";

export async function GET(req, { params }) {
  const { id } = params;
  const article = newsArticles.find((article) => article.id === parseInt(id, 10));

  if (!article) {
    return new Response("Article not found", { status: 404 });
  }

  return new Response(JSON.stringify(article), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
