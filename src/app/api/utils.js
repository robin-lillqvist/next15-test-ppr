import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { titles, contents, authors } from "./textBank.js";

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
    author: getRandomItem(authors),
    date: new Date().toLocaleDateString(),
  };
};

const createUserActivity = async () => {
  const data = await loadData();
  const action = getRandomItem(["Commented on", "Liked", "Shared", "Reviewed", "Saved"]);
  const title = getRandomItem(data.newsArticles).title;
  return {
    description: `${action} "${title}"`,
  };
};

const addNewData = async () => {
  console.log("--- Starting data update process ---");
  const data = await loadData();

  console.log("Step 1: Creating a new news article");
  const newArticle = await createNewsArticle();
  console.log("New article created:", newArticle);

  console.log("Step 2: Adding new article to newsArticles array");
  data.newsArticles.push(newArticle);
  console.log("Updated newsArticles:", data.newsArticles);

  console.log("Step 3: Selecting a random category");
  const categories = Object.keys(data.categoryArticles);
  const randomCategory = getRandomItem(categories);
  console.log("Selected category:", randomCategory);

  console.log("Step 4: Adding new article to the selected category");
  const newCategoryArticle = {
    ...newArticle,
    id: data.categoryArticles[randomCategory].length + 1,
  };
  data.categoryArticles[randomCategory].push(newCategoryArticle);
  console.log(`Updated ${randomCategory} categoryArticles:`, data.categoryArticles[randomCategory]);

  console.log("Step 5: Creating a new user activity");
  const newUserActivity = await createUserActivity();
  data.userActivity.push(newUserActivity);
  console.log("New user activity created:", newUserActivity);
  console.log("Updated userActivity:", data.userActivity);

  console.log("Step 6: Saving updated mock data to file");
  await saveData(data);
  console.log("Mock data saved successfully");

  console.log("--- Data update process completed ---");
};

export { getRandomItem, createNewsArticle, addNewData };
