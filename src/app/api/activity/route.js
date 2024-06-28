// app/api/user/activity/route.js
import { userActivity } from "../../mockData";

export async function GET() {
  return new Response(JSON.stringify(userActivity), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
