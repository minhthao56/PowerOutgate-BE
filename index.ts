import express, { Express, Request, Response } from "express";
import db from "./database";
import axios from "axios";
import https from "https";
import CheerioParse from "src/internals/cheerioParse";
const app: Express = express();
const port = 3000;

db.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected!");
});
app.get("/", async (req: Request, res: Response) => {
    // At request level
    const agent = new https.Agent({
        rejectUnauthorized: false,
    });

    try {
        const resp = await axios.get(
            "https://www.cskh.evnspc.vn/TraCuu/GetThongTinLichNgungGiamMaKhachHang?madvi=PB1703&tuNgay=22-06-2022&denNgay=29-06-2022&ChucNang=MaDonVi",
            {
                httpsAgent: agent,
            }
        );
        const html = resp.data;
        res.send(html);

        const cheerio = new CheerioParse(html);
        const test = cheerio.parseTable();
        console.log({ test });
    } catch (error) {
        console.log({ error });
    }
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
