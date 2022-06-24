import { Router } from "express";

const router = Router();

router.get("/", (req, resp) => {
    resp.send("test");
});

export default router;
