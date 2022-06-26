import db from "@src/database";
import fs from "fs";
import companiesMN from "@src/crawler/mn/list-company-mn";
import organizations from "@src/database/init-database/json/organizations.json";

db.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected!");
});

const companySql = fs.readFileSync(__dirname + "/sql/insert-companies.sql").toString();
const organizationSql = fs.readFileSync(__dirname + "/sql/insert-organizations.sql").toString();

async function insertCompany() {
    for (const company of companiesMN) {
        const query = {
            text: companySql,
            values: Object.values(company),
        };

        try {
            const result = await db.query(query);
            console.log({ result });
        } catch (error) {
            console.log({ error });
        }
    }
}

async function insertOrganization() {
    for (const organization of organizations) {
        const query = {
            text: organizationSql,
            values: Object.values(organization),
        };
        try {
            const result = await db.query(query);
            console.log({ result });
        } catch (error) {
            console.log({ error });
        }
    }
}
async function runInitData() {
    await insertCompany();
    await insertOrganization();
    db.end();
}

runInitData();
