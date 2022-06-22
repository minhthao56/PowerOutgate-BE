import { Client } from "pg";

const client = new Client({
  host: process.env.PG_HOST || "localhost",
  user: process.env.PG_USER || "postgres",
  database: process.env.PG_DATABASE || "postgres",
  password: process.env.PG_PASSWORD || "123456",
  port: 5432,
});

export default client;
