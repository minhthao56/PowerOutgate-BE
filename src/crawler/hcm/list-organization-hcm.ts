import axiosClientHCM from "@src/internals/axios-client/axiosClientHCM";
import CheerioParse from "@src/internals/cheerioParse";

const IDs: number[] = [];

for (let i = 0; i < 20; i++) {
    IDs.push(i);
}

async function getOrganizationHCM(ID: string | number) {
    try {
        const result = await axiosClientHCM.get("Info/LichCatDienChiTiet", { params: { ID } });
        return result.data as string;
    } catch (error) {}
}

async function getOrganizationsHCM() {
    for (const ID of IDs) {
        const html = await getOrganizationHCM(ID);
        const cheerioParse = new CheerioParse(html || "");
        const selector = cheerioParse.loadHTML();
        const text = selector("strong").text();
        console.log({ text, ID });
    }
}

getOrganizationsHCM();
