import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.resolve(__dirname, "../../mockData.json");

export async function GET(req, { params }) {
  try {
    const data = JSON.parse(await fs.readFile(dataFilePath, "utf8"));
    const { id } = params;
    const article = data.newsArticles.find((article) => article.id === parseInt(id, 10));

    if (!article) {
      return new Response("Article not found", { status: 404 });
    }

    return new Response(JSON.stringify(article), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error reading data:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
