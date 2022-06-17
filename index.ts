import express, { Express, Request, Response } from "express";
import db from "./database";

const app: Express = express();
const port = 8000;

db.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected!");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
