import db from "@src/database";
import fs from "fs";
import companiesMN from "@src/crawler/list-company-mn";
import organizations from "@src/database/init-database/json/organizations.json";

db.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected!");
});

const companyInsert = fs.readFileSync(__dirname + "/sql/insert-companies.sql").toString();
const organizationInsert = fs.readFileSync(__dirname + "/sql/insert-companies.sql").toString();

for (const company of companiesMN) {
    const query = {
        text: companyInsert,
        values: Object.values(company),
    };

    db.query(query, (err, result) => {
        if (err) {
            console.log({ err });
        }
        if (result) {
            console.log({ result });
        }
    });
}

for (const organization of organizations) {
    const query = {
        text: organizationInsert,
        values: Object.values(organization),
    };
    db.query(query, (err, result) => {
        if (err) {
            console.log({ err });
        }
        if (result) {
            console.log({ result });
        }
    });
}
