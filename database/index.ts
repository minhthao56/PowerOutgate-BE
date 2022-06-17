import { Client } from "pg";

const client = new Client({
  host: "db",
  user: "postgres",
  database: "postgres",
  password: "123456",
});

export default client;
