import fs from "fs";
import path from "path";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "src", "app", "api", "mockData.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  const paths = data.newsArticles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "src", "app", "api", "mockData.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  const article = data.newsArticles.find((article) => article.id === parseInt(params.id, 10));

  return {
    props: {
      article,
    },
  };
}

export default function NewsArticlePage({ article }) {
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
