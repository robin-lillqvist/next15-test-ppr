export async function POST(req) {
  const formData = await req.json();

  // Process form data
  // Example: Save data to a database
  // ...

  return new Response(JSON.stringify({ message: "Form submitted successfully" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
