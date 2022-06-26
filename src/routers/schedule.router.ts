import { getSchedules } from "@src/crawler/mn/info-schedule";
import { Router } from "express";

const router = Router();

router.get("/", async (req, resp) => {
    await getSchedules();
    resp.send("test");
});

export default router;
