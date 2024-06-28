import fs from "fs/promises";
import path from "path";

const dataFilePath = path.resolve(process.cwd(), "src/app/api/mockData.json");

export async function GET() {
  try {
    const data = JSON.parse(await fs.readFile(dataFilePath, "utf8"));
    const userActivity = data.userActivity;

    return new Response(JSON.stringify(userActivity), {
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
