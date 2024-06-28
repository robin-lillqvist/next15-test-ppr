import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.resolve(__dirname, "../mockData.json");

export async function GET(req) {
  const data = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

  return new Response(JSON.stringify(data.newsArticles), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
