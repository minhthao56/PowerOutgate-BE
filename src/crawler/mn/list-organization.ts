import axiosClientMN from "@src/internals/axios-client/axiosClientMN";
import CheerioParse from "@src/internals/cheerioParse";
import companies from "@src/crawler/mn/list-company-mn";
import { Organization } from "@src/schema/organization-base";
import fs from "fs";

const getOrganizationMN = async (pMA_DVICTREN: string) => {
    try {
        const resp = await axiosClientMN.get(`LienHe/getDienLucList`, {
            params: { pMA_DVICTREN },
        });
        return resp.data as string;
    } catch (error) {
        console.log({ error });
    }
};

async function getListOrganizationMN() {
    const organizations: Organization[] = [];
    for (const company of companies) {
        const html = await getOrganizationMN(company.code);
        const cheerioParse = new CheerioParse(html || "");
        const selector = cheerioParse.loadHTML();
        selector("option").each((_, e) => {
            const name = selector(e).text();
            const code = selector(e).attr("value");
            if (code) {
                const organization = new Organization();
                organization.company_code = company.code;
                organization.code = code;
                organization.name = name;
                organizations.push(organization);
            }
        });
    }
    const json = JSON.stringify(organizations);
    const path = __dirname.split("/");
    const newPath = path.slice(0, path.length - 2).join("/");

    fs.writeFileSync(newPath + "/dist/database/init-database/json/organizations.json", json);
    fs.writeFileSync(newPath + "/src/database/init-database/json/organizations.json", json);
}

getListOrganizationMN();
