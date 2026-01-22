import { neon } from "@neondatabase/serverless";

export async function GET(request: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql`SELECT * FROM drivers`;

    return Response.json({ data: response });
  } catch (error) {
    console.error("Erreur lors de la récupération des chauffeurs:", error);
    return Response.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}
