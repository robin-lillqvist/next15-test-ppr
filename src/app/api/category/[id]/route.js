// app/api/category/[id]/route.js
import { categoryArticles } from "../../mockData";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const articles = categoryArticles[id];

  if (!articles) {
    return new Response("Category not found", { status: 404 });
  }

  return new Response(JSON.stringify(articles), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
