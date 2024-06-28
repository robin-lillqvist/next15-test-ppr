import fs from "fs";
import path from "path";
import Link from "next/link";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src", "app", "api", "mockData.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  return {
    props: {
      newsArticles: data.newsArticles,
    },
  };
}

export default function NewsPage({ newsArticles }) {
  return (
    <div>
      <h1>News Articles</h1>
      {newsArticles.map((article) => (
        <div key={article.id}>
          <h2>
            <Link href={`/news/${article.id}`}>{article.title}</Link>
          </h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}
