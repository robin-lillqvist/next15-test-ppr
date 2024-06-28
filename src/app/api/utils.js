import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { titles, contents, authors, categories } from "./textBank.js";
import { images } from "./imageBank.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.resolve(__dirname, "mockData.json");

let cache = null;

const loadData = async () => {
  if (!cache) {
    const data = await fs.readFile(dataFilePath, "utf8");
    cache = JSON.parse(data);
  }
  return cache;
};

const saveData = async (data) => {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
  cache = data; // Update cache
};

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const createNewsArticle = async () => {
  const data = await loadData();
  const newId = data.newsArticles.length + 1;
  return {
    id: newId,
    title: getRandomItem(titles),
    content: getRandomItem(contents),
    image: getRandomItem(images),
    author: getRandomItem(authors),
    category: getRandomItem(categories),
    date: new Date().toLocaleDateString(),
  };
};

const createUserActivity = async () => {
  const data = await loadData();
  const action = getRandomItem(["Commented on", "Liked", "Shared", "Reviewed", "Saved", "Hated"]);
  const title = getRandomItem(data.newsArticles).title;
  return {
    description: `${action} "${title}"`,
  };
};

const addNewData = async () => {
  const data = await loadData();

  const newArticle = await createNewsArticle();
  console.log("New article created:", newArticle);

  data.newsArticles.push(newArticle);
  console.log("Updated newsArticles:", data.newsArticles);

  const newUserActivity = await createUserActivity();
  data.userActivity.push(newUserActivity);
  console.log("New user activity created:", newUserActivity);
  console.log("Updated userActivity:", data.userActivity);

  await saveData(data);
  console.log("Mock data saved successfully");
};

export { getRandomItem, createNewsArticle, addNewData };
