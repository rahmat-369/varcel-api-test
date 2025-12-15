export async function GET() {
  return new Response(
    JSON.stringify({ status: "HIDUP" }),
    { headers: { "Content-Type": "application/json" } }
  );
}
