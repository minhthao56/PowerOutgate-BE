import express, { Express, Request, Response } from "express";
import db from "./database";
import axios from "axios";
import cheerio from "cheerio";

const app: Express = express();
const port = 3000;

db.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected!");
});
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
app.get("/", async (req: Request, res: Response) => {
  const resp = axios.get(
    "https://www.cskh.evnspc.vn/TraCuu/GetThongTinLichNgungGiamMaKhachHang?madvi=PB1703&tuNgay=22-06-2022&denNgay=29-06-2022&ChucNang=MaDonVi"
  );
  res.send((await resp).data);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
