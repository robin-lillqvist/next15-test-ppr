// app/api/news/route.js
import { newsArticles } from "../mockData";

export async function GET() {
  return new Response(JSON.stringify(newsArticles), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
