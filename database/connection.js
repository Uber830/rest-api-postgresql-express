import postgres from "postgres";
import { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } from "../config.js";

export const sql = postgres({
  host: PGHOST,
  port: 5432,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  ssl: false,
});

export const validateConnection = async () => {
  try {
    await sql`SELECT 1`;
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};
