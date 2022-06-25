import db from "@src/database";
import fs from "fs";

db.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected!");
});

const sql = fs.readFileSync(__dirname + "/sql/init-table.sql").toString();

db.query(sql, (err, result) => {
    if (err) {
        console.log({ err });
    }
    if (result) {
        console.log({ result });
    }
    db.end();
});
