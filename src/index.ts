import express, { Express } from "express";
import db from "@src/database";
import scheduleRouter from "@src/routers/schedule.router";
import { App } from "@src/common/constants/app";

const app: Express = express();
db.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected!");
});
app.use(`${App.BASE_URL}/schedule`, scheduleRouter);

app.listen(App.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${App.PORT}`);
});
